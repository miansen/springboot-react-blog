const { injectBabelPlugin } = require('react-app-rewired');
const rewireLess = require('react-app-rewire-less');

module.exports = function override(config, env) {
    config = injectBabelPlugin(
        ['import', { libraryName: 'antd', libraryDirectory: 'es', style: true }], // change importing css to less
        config,
    );
    //全局主题样式配置
    config = rewireLess.withLoaderOptions({
        modifyVars: {
            "@primary-color": "#ed4040", // 全局主色（红色）
            // "@primary-color": "#1890ff", // 全局主色（蓝色）
            "@font-size-base": "14px", // 主字号
            "@link-color" : "#333", //普通的、未被访问的链接色
            "@link-visited-color" : "#333", //已访问的链接样式
            // "@link-hover-color" : "#4078c0", //鼠标指针位于链接上方样式（蓝色）
            "@link-hover-color" : "#ed4040", //鼠标指针位于链接上方样式（红色）
            "@link-active-color" : "#333", //链接被点击的时刻样式
            "@link-decoration" : "none", //去除下划线
            "@link-visited-decoration" : "none", //去除下划线
            "@link-hover-decoration" : "none", //去除下划线
            "@link-focus-decoration" : "none" //去除下划线
        },
        javascriptEnabled: true,
    })(config, env);

    return config;
};