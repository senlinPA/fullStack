const  path = require('path')

function resolve(dir){
    return path.join(__dirname, dir)
}

module.exports = {
    devServer:{//设置指定端口
        port: 8018
    },
    chainWebpack(config) {
        config.resolve.alias
            .set('@', resolve('src'))
    }
}