# 需要安装的依赖：<br/>
"babel-core": "^6.26.3"<br/>
"babel-loader": "^7.1.5"<br/>
"babel-plugin-component": "^1.1.1"<br/>
"babel-plugin-syntax-dynamic-import": "^6.18.0"<br/>
"babel-preset-env": "^1.7.0"<br/>
"css-loader": "^1.0.0"<br/>
"file-loader": "^1.1.11"<br/>
"html-webpack-plugin": "^3.2.0"<br/>
"mini-css-extract-plugin": "^0.4.1"<br/>
"node-sass": "^4.9.2"<br/>
"nodemon": "^1.18.3"<br/>
"sass-loader": "^7.0.3"<br/>
"shx": "^0.3.2"<br/>
"style-loader": "^0.21.0"<br/>
"url-loader": "^1.0.1"<br/>
"vue-loader": "^15.2.6"<br/>
"vue-template-compiler": "^2.5.16"<br/>
"webpack": "^4.16.3"<br/>
"webpack-cli": "^3.1.0"<br/>
"webpack-dev-server": "^3.1.5"<br/>

"axios": "^0.18.0"<br/>
"element-ui": "^2.4.5"<br/>
"vue": "^2.5.16"<br/>
"vue-router": "^3.0.1"<br/>

以上为开发环境最基本依赖，下面接生产版本依赖：<br/>

* 压缩css: "optimize-css-assets-webpack-plugin": "^5.0.0", "cssnano": "^4.0.4"
* 删除不用的css: "purify-css": "^1.2.5", "purifycss-webpack": "^0.7.0", "glob": "^7.1.2"
* 压缩js: "uglifyjs-webpack-plugin": "^1.2.7"

# 项目目录结构
```
07/28 Sat  12:57 AM    <DIR>          .
07/28 Sat  12:57 AM    <DIR>          ..
07/27 Fri  10:15 PM               248 .babelrc
07/27 Fri  10:14 PM                34 .gitignore
07/27 Fri  10:56 PM    <DIR>          assets
07/27 Fri  10:36 PM    <DIR>          build
07/27 Fri  10:27 PM               379 intro.md
07/28 Sat  12:57 AM    <DIR>          node_modules
07/28 Sat  12:57 AM           296,375 package-lock.json
07/28 Sat  12:57 AM             1,043 package.json
07/27 Fri  09:55 PM    <DIR>          src
```
假设src是这样的：
```
+---app
|   +---modules
|   |   \---main
|   \---router
+---libs
|   \---wyin
|       +---core
|       \---vue
\---test
```
假设build是这样的：
```
│-configConst.js
│-webpack.config.js
└─webpack
    |--entry.js
    |--output.js
    |--plugins.js
    |--resolve.js
    |--rules.js
    |--optimization.js
```
# 配置webpack
将webpack配置文件常用的几个部分分为如下几个文件：<br/>
entry.js - 入口配置<br/>
output.js - 输出配置<br/>
plugins.js - 插件配置<br/>
resolve.js - 路径映射，自动识别扩展名配置<br/>
rules.js - loaders配置<br/>
optimization.js - webpack4 js/css分块，优化压缩设置等<br/>
configConst - webpack配置中用到的各种路径，常量集合，方便修改<br/>

### 配置plugins与rules
1. 处理vue文件
   ```
    const VueLoaderPlugin = require('vue-loader/lib/plugin');

    plugins加入:
    new VueLoaderPlugin()

    rules加入:
    {
        test:/\.vue$/,
        loader: 'vue-loader'
    }

   ```
2. 处理js文件
   ```
    rules加入：
    {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader'
    }
   ```
3. 处理css文件-将css提取到独立的文件中，但并不压缩
   ```
    const MiniCssExtractPlugin = require("mini-css-extract-plugin");
   
    plugins加入:

    new MiniCssExtractPlugin({
        filename: './styles/[name]-[hash].css',
        chunkFilename: './styles/chunk-[name]-[hash].css'
    })
    
    rules加入:

    {
        test: /\.s?[ac]ss$/,
        use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            'sass-loader'
        ]
    }
   ```
4. 处理图片，字体等其他资源
   ```
   rules加入:

    {
        test: /.(jpg|jpeg|gif|bmp|png|ico)$/,
        use: {
            loader: 'url-loader',
            options: {
                limit: 10240,
                publicPath: '../',
                name: './images/[name]-[hash:8].[ext]'
            }
        }
    },
    {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
            limit: 10240,
            publicPath: '../',
            name: './media/[name].[hash:8].[ext]'
        }
    },
    {
        test: /\.(svg|eot|ttf|woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        use: {
            loader: 'file-loader',
            options: {
                publicPath: '../',
                name: './fonts/[name].[ext]'
            }
        }
    }
   ```
### 输出样例解释
   ```
   Built at: 2018-07-28 10:42:13
                                        Asset       Size  Chunks             Chunk Names
    ./styles/app-e5b450893489405d9e16.css.map    622 KiB     app  [emitted]  app
                    ./fonts/element-icons.ttf   10.8 KiB          [emitted]
        ./styles/app-e5b450893489405d9e16.css    479 KiB     app  [emitted]  app
                  app-e5b450893489405d9e16.js    1.7 MiB     app  [emitted]  app
    ./styles/chunk-0-e5b450893489405d9e16.css  147 bytes       0  [emitted]
              chunk-0-e5b450893489405d9e16.js   14.2 KiB       0  [emitted]
                   ./fonts/element-icons.woff   6.02 KiB          [emitted]
              app-e5b450893489405d9e16.js.map   1.92 MiB     app  [emitted]  app
./styles/chunk-0-e5b450893489405d9e16.css.map  311 bytes       0  [emitted]
          chunk-0-e5b450893489405d9e16.js.map   4.17 KiB       0  [emitted]
                           favicon-marrio.ico    141 KiB          [emitted]
                                   index.html  506 bytes          [emitted]
   ```
1. 带chunk命名的js/css文件是动态加载产生的<br/>
   如chunk-0-e5b450893489405d9e16.css,chunk-0-e5b450893489405d9e16.js的chunk name都为0，所以这是同一个模块产生的css/js,如果要自定义chunk name，可以在动态加载函数加入注释，如：/* webpackChunkName: "lodash" */
2. 没带chunk命名的js/css文件是入口配置产生
3. 字体，图片文件

虽然只用到了element-ui的button组件，这里app-e5b450893489405d9e16.css把element-ui所有的css到提取出来了，下面对产生的css文件进行优化：
* 1 压缩css；
* 2 去掉多余的css

### 压缩css
```
npm install optimize-css-assets-webpack-plugin cssnano --save-dev

const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const cssnano = require("cssnano");

在plugins中加入(生产环境))：
new OptimizeCSSAssetsPlugin({
    cssProcessor: cssnano,
    cssProcessorOptions: {
        discardComments: {
            removeAll: true,
        }
    },
    canPrint: false,
})

```
### 去掉多余的css
```
npm install glob purifycss-webpack purify-css --save-dev

const PurifyCSSPlugin = require("purifycss-webpack");
const glob = require('glob');

在plugins中加入:
new PurifyCSSPlugin({
    paths: glob.sync(`${configConst.entryUrl}/**/*.vue`, { nodir: true }),
    purifyOptions:{
        info: true,
        minify: true,
        rejected: false,
        whitelist: configConst.purifyCssWhiteList
    }
})
```
注：purifycss-webpack必须用在mini-css-extract-plugin后面<br/>
经过压缩和去掉多余css后的输出可以看出css文件已经减少了很多：
```
Built at: 2018-07-28 11:37:14
                                    Asset        Size  Chunks                    Chunk Names
               ./fonts/element-icons.woff    6.02 KiB          [emitted]
                ./fonts/element-icons.ttf    10.8 KiB          [emitted]
    ./styles/app-091cb9684c950bc7e379.css    7.47 KiB       0  [emitted]         app
              app-091cb9684c950bc7e379.js     497 KiB       0  [emitted]  [big]  app
./styles/chunk-1-091cb9684c950bc7e379.css    69 bytes       1  [emitted]
          chunk-1-091cb9684c950bc7e379.js  1020 bytes       1  [emitted]
                       favicon-marrio.ico     141 KiB          [emitted]
                               index.html   506 bytes          [emitted]
```
### 压缩js
```
npm install uglifyjs-webpack-plugin --save-dev

const UglifyJsWebpackPlugin = require('uglifyjs-webpack-plugin');

const uglifyjsWebpackPlugin = new UglifyJsWebpackPlugin({
    sourceMap: true,
    beautify: false,
    mangle: {
        screw_ie8: true
    },
    compress: {
        unused: true,
        dead_code: true,
        drop_debugger: true,
        conditionals: true,
        evaluate: true,
        drop_console: true,
        sequences: true,
        booleans: true,
        screw_ie8: true,
        warnings: false
    },
    comments: false
})

在optimization中加入:
minimizer: [uglifyjsWebpackPlugin]
```
### js/css分块
```
在optimization中加入:
splitChunks: {
    cacheGroups: {
        styles: {
            name: 'styles',
            test: /\.s?[ac]ss$/,
            chunks: 'all',
            enforce: true
        },
        elementUI: {
            name: 'elementUI',
            test: /node_modules\\element-ui/,
            chunks: 'initial',
        }
    }
}
styles块:表示将通过静态导入的所有css,scss等全部压缩到一个块，原来vue文件中的css不会包含其中。
elementUI块：表示将element-ui目录导入的所有资源压缩到一个块
```
最终的输出：
```
Built at: 2018-07-28 12:19:00
                                            Asset       Size  Chunks                    Chunk Names
./styles/chunk-elementUI-8173b286779b436c34c5.css   6.95 KiB       2  [emitted]         elementUI
                       ./fonts/element-icons.woff   6.02 KiB          [emitted]
            ./styles/app-8173b286779b436c34c5.css  211 bytes       0  [emitted]         app
                      app-8173b286779b436c34c5.js    134 KiB       0  [emitted]         app
        ./styles/chunk-1-8173b286779b436c34c5.css   69 bytes       1  [emitted]
                  chunk-1-8173b286779b436c34c5.js   1.01 KiB       1  [emitted]
                        ./fonts/element-icons.ttf   10.8 KiB          [emitted]
          chunk-elementUI-8173b286779b436c34c5.js    364 KiB       2  [emitted]  [big]  elementUI
   ./styles/chunk-styles-8173b286779b436c34c5.css  322 bytes       3  [emitted]         styles
             chunk-styles-8173b286779b436c34c5.js  104 bytes       3  [emitted]         styles
                               favicon-marrio.ico    141 KiB          [emitted]
                                       index.html  832 bytes          [emitted]
```
这里element-ui还可以按需加载的，全部大小是500多k，这里的364k是因为加载了如下组件：
```
Button, Menu, MenuItem, Icon, Badge, Radio, RadioGroup, RadioButton,
Submenu, Checkbox, Tree, Popover, Input,Collapse,CollapseItem,
Loading, Table, Select, Option, FormItem,CheckboxGroup,Tooltip,
Form, TableColumn,Dialog,Row,Col,Pagination,DatePicker, Dropdown,
DropdownMenu, DropdownItem
```

# 其他
块分析,动态加载，热退换等。。。
