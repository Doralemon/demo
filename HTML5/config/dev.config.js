
module.exports = {
    //需要打包的入口，开发环境 建议只开一个入口
    entry:{ 
        //入口命名规范1： 应该与入口对应的文件夹名字一致，因为webpack.dev.config中设置好了打包路径
        //入口命名规范2： 入口文件对应的html模板都应该以index.html命名，比如carespay入口文件对应的html路径  /src/pages/carespay/index.html
        preference: ['babel-polyfill','./src/pages/preference/index.js'],
        park: ['babel-polyfill','./src/pages/park/index.js'],
    },
    webside:'/'
}