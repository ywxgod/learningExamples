const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const PurifyCssPlugin = require('purifycss-webpack');
const glob = require('glob');
const path = require('path');


const PATH = {
    entry: path.join(__dirname,'./src/main.ts'),
    output: path.join(__dirname, './dist')
}

const extractTextPlugin = new ExtractTextWebpackPlugin({
    filename:'[name].css'
});


function commonConfig(){
    return {
        entry:PATH.entry,
        output:{
            path: PATH.output,
            filename: '[name].js'
        },
        module:{
            exprContextCritical: false,
            rules:[
                {
                    test:/\.ts$/, 
                    loaders:["ts-loader","angular2-template-loader?keepUrl=true"],
                    exclude: [/\.(spec|e2e)\.ts$/]
                },
                {
                    test:/\.(html|css)$/,
                    loader: 'raw-loader',
                    exclude:/\.async\.(html|css)$/
                },
                {
                    test:/\.css$/,
                    use: ExtractTextWebpackPlugin.extract({
                        fallback:'style-loader',
                        use:{
                            loader:'css-loader'
                        }
                    })
                }
            ]
        },
        resolve:{
            extensions:['.ts','.js','.css','.html']
        },
        plugins:[
            new HtmlWebpackPlugin({
                title:'Ng2 demo',
                template: './src/index.html'
            }),
            new PurifyCssPlugin({
                paths: glob.sync(`${PATH.entry}/**/*.ts`,{nodir:true})
            }),
            new ExtractTextWebpackPlugin({
                filename:'[name].css'
            })
            
        ]
    }
}

function productionConfig(){
    return commonConfig();
}

function developmentConfig(){
    const config = {
        devServer:{
            historyApiFallback: true,
            stats: 'errors-only',
            host: process.env.HOST,
            port: process.env.PORT
        }
    };
    return Object.assign({},commonConfig(),config);
}

module.exports = (env)=>{
    if(env === 'production'){
        return productionConfig();
    }
    return developmentConfig();
}