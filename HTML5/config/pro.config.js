module.exports = {
    //需要打包的入口，生产上线环境 所有的需要打包的入口都写在这边
    entry:{ 
        preference:  ['babel-polyfill','./src/pages/preference/index.js'],
        park:  ['babel-polyfill','./src/pages/park/index.js'],
    },
    webside:'/'
}