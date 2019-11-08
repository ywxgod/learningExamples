import createElement from "./vdom/createElement";
import render from "./vdom/render";
import mount from "./vdom/mount";
import diff from './vdom/diff';

const createVApp = count => createElement('div', {
    attrs: {
        id: 'app',
        dataCount: count
    },
    children: [
        'The current count is: ',
        String(count),
        ...Array.from({length: count}, ()=> createElement('img',{
            attrs: {
                src: 'https://media.giphy.com/media/cuPm4p4pClZVC/giphy.gif'
            }
        }))
    ]
})

let vApp = createVApp(0);
const $app = render(vApp);
const $target = document.getElementById('app');
let $rootEl = mount($app, $target);

setInterval(() => {
    const n = Math.floor(Math.random()*10);
    let newVApp = createVApp(n);
    const patch = diff(vApp, newVApp);
    $rootEl = patch($rootEl);
    vApp = newVApp;
},1000)


// function start(count){
//     let vApp = createVApp(count);
//     const $app = render(vApp);
//     const $target = document.getElementById('app');
//     return mount($app, $target);
// }

// let count = 0;
// let $rootEl = start(count);

// setInterval(() => {
//     $rootEl = start(++count);
// },4000)
