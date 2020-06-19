const path = require("path")

module.exports = {
    configureWebpack:()=>({
        resolve:{
            alias:{
                '@views':path.resolve('./src')
            }
        }
    })
}