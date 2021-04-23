const fs = require('fs');
const os = require('os');
const path = require('path');
const utils = require('util');
const dateFns = require('date-fns');
const fsPromise = fs.promises;
const exec = utils.promisify(require('child_process').exec);
const sourceFileDir = '../dist';
const targetDir = '../zip';
const zipFilename = 'my-web_md5.zip';
const deployFilePrefix = 'my-web_';
const md5TxtFilename = 'md5.txt';

async function rename(deployFilePrefix){
    let md5Array = fs.readFileSync('zip/md5.txt','utf-8').split(os.EOL).filter(i=>!!i);
    const isWindows = os.type() == 'Windows_NT';
    const windowsMd5 = md5Array[md5Array.length-1].split(' ')[3].toLowerCase();
    const macMd5 = md5Array[md5Array.length-1].split('=')[1];
    let latestMd5 = isWindows ? windowsMd5 : macMd5;
    latestMd5 = latestMd5.trim();
    const source = path.join(__dirname, targetDir, zipFilename);
    const target = path.join(__dirname, targetDir, `${deployFilePrefix}${latestMd5}.zip`);
    await fsPromise.rename(source, target);
}

async function mkdir(targetDir){
    let canAccess = true;
    try {
        await fsPromise.access(targetDir);
    }catch (err) {
        canAccess = false;
    }
    if(!canAccess){
        await fsPromise.mkdir(targetDir);
    }
}

async function zip(filename){
    const zipFilePath = path.join(__dirname, targetDir, filename);
    const sourceFilePath = path.join(__dirname, sourceFileDir);
    try {
        await exec(`cd ${sourceFilePath}`);
        await exec(`zip -r -q -o ${zipFilePath} ./*`, {cwd: sourceFilePath});
        await exec(`cd ..`, {cwd: sourceFilePath});
    }catch (err) {
        console.log(err);
    }
}

async function saveMd5Txt(zipFilename, txtFileName){
    try {
        const zipFilePath = path.join(__dirname, targetDir, zipFilename);
        const txtFilePath = path.join(__dirname, targetDir, txtFileName);
        const {stdout} = await exec(`md5 ${zipFilePath}`);
        const { size } = await fsPromise.stat(zipFilePath);
        const currentTime = dateFns.format(new Date(),'yyyy-MM-dd HH:mm:ss');
        const lineText = `${currentTime} ${size} ${stdout}`;
        await fsPromise.writeFile(txtFilePath, lineText, {flag: 'a'});
    }catch(err){
        console.log(err);
    }

}

async function start(targetDir){
    await mkdir(path.join(__dirname, targetDir));
    await zip(zipFilename);
    await saveMd5Txt(zipFilename, md5TxtFilename);
    await rename(deployFilePrefix);
}

start(targetDir);
