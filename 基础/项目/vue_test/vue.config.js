module.exports={
    pages:{
        index:{
            entry:'src/main.js'
        },
    },

    lintOnSave:false,

    devServer:{
        // proxy:'http://121.5.251.250:8080'
        proxy:{
            '/atguigu':{
                target:'http://121.5.251.250:8080',
                pathRewrite:{
                    '^/atguigu':''
                },
                ws:true,//用于支持websocket
                changeOrigin:true//用于控制请求头的host值
            },
        }
    },

    css: {
      loaderOptions: {
        stylus: {
          'resolve url': true,
          'import': [
            './src/theme'
          ]
        }
      }
    },

    pluginOptions: {
      'cube-ui': {
        postCompile: true,
        theme: true
      }
    }
}
