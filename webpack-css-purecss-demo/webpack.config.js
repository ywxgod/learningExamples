const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const PurifyCssPlugin = require('purifycss-webpack');
const glob = require('glob');

const PATHS = {
    app: path.join(__dirname, 'app'),
    build: path.join(__dirname, 'build')
}

const extractTextPlugin = new ExtractTextWebpackPlugin({
    filename:'[name].css'
});

const commonConfig = {
    entry:{
        app: PATHS.app
    },
    output:{
        path: PATHS.build,
        filename:'[name].js'
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:ExtractTextWebpackPlugin.extract({
                    fallback: "style-loader",
                    use:{
                        loader:'css-loader',
                        options:{
                            modules:true
                        }
                    }
                })
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            title:'Webpack demo'
        }),
        new PurifyCssPlugin({
            paths: glob.sync(`${PATHS.app}/**/*.js`,{nodir:true})
        }),
        new ExtractTextWebpackPlugin({
            filename:'[name].css'
        })
    ]
}

const productionConfig = ()=>commonConfig;
const developmentConfig = ()=>{
    const config = {
        devServer:{
            historyApiFallback:true,
            stats: 'errors-only',
            host: process.env.HOST,
            port: process.env.PORT
        }
    };
    return Object.assign({},commonConfig,config);
};

module.exports = (env)=>{
    console.log(`env: ${env}`);
    if(env==='production'){
        return productionConfig();
    }
    return developmentConfig();
}