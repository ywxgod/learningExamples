splitChunks: {
            minSize: 0,
            chunks: 'all',
            maxInitialRequests: Infinity,
            cacheGroups: {
                styles: {
                    name: 'vue.styles',
                    test: /\.(vue)$/, // chunks plugin has to be aware of all kind of files able to output css in order to put them together /\.(s?css|vue)$/
                    chunks: 'all',
                    priority: 30,
                    enforce: true
                },
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: 10,
                    name: (module) => {

                        const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];

                        if (packageName.indexOf('vue') >= 0) {
                            return 'npm.vue';
                        }
                        else if (packageName.indexOf('element-ui') >= 0) {
                            return 'npm.eleui';
                        }
                        else if (packageName.indexOf('cti-js-sdk') >= 0) {
                            return 'npm.ctisdk';
                        }
                        else if (packageName.indexOf('echarts') >= 0) {
                            return 'npm.echarts';
                        }
                        else {
                            return 'npm.vendor';
                        }
                    }
                },
                // appmodule:{
                //     test: /[\\/]myProject\/src\/app\/modules[\\/]/,
                //     priority: 10,
                //     name: (module,chunks,cacheGroupKey) => {
                //         const moduleName = module.context.match(/[\\/]myProject\/src\/app\/modules[\\/](.*?)([\\/]|$)/)[1];
                //         let name = '';
                //         if(moduleName.indexOf('模块名1')>=0){
                //             name = '模块名1';
                //         }else if(moduleName.indexOf('模块名2')>=0){
                //             name = '模块名2';
                //         }else{
                //             name = 'small';
                //         }
                //         return `${cacheGroupKey}.${name}`;
                //     }
                // },
                // appchk:{
                //     test: /[\\/]myProject\/src\/app[\\/]/,
                //     priority: 5,
                //     name: (module) => {
                //         return 'app.chks';
                //     }
                // },
                // applibs:{
                //     test: /[\\/]myProject\/src\/libs[\\/]/,
                //     priority: 5,
                //     name: (module) => {
                //         return 'app.libs';
                //     }
                // }
            }
        },

 //      配置文件路径
 /Users/etc/stunnel/stunnel.conf
里面的内容是
client = yes

[proxy-jp]
accept = 127.0.0.1:9900
connect = SSLSpeedy地址:443
sslspeedy地址怎么看？请登陆网站，点击my vpn，点击你的vpn用户名，然后点击服务器列表一行的 Surge 按钮，你会看到弹出这样的配置文件：

[Proxy]
JP0=https,jp0.60in.com ,443,user,pass
JP1=https,jp1.60in.com ,443,user,pass
JP2=https,jp2.60in.com ,443,user,pass 
LA= https,la.60in.com, 443,user,pass
然后终端里面输入
ps -ef |grep stunnel|awk '{print $2}'|xargs kill;stunnel
