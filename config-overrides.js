const path = require("path");
const { override, fixBabelImports,addWebpackAlias,addBabelPlugins, useBabelRc } = require('customize-cra')


//按需加载antd
module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: 'css',
    }),
    // 配置按需加载
    // addBabelPlugins(
    //     ["syntax-dynamic-import",{"legacy": true}],
    // ),useBabelRc(),
    // 配置别名
    addWebpackAlias({        
        "@":path.join(__dirname,"./src"),
        "@action":path.join(__dirname,"./src/action"),
        "@api":path.join(__dirname,"./src/api"),
        "@common":path.join(__dirname,"./src/common"),
        "@components":path.join(__dirname,"./src/components"),
        "@routers":path.join(__dirname,"./src/routers"),
        "@static":path.join(__dirname,"./src/static"),
        "@store":path.join(__dirname,"./src/store"),
        "@utils":path.join(__dirname,"./src/utils"),
        "@views":path.join(__dirname,"./src/views"),
        "@layout":path.join(__dirname,"./src/layout")
    })
);