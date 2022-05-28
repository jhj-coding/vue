//入口文件
//引入Vue
import Vue from 'vue'
import './cube-ui'
//引入App组件 他是所有组件的父组件
import App from './App.vue'
//引入VueRouter
import VueRouter from 'vue-router'
//引入路由器
import router from './router'
//引入cube ui
import Cube from 'cube-ui'
//关闭生产提示
Vue.config.productionTip = false
//使用插件
Vue.use(VueRouter)
Vue.use(Cube)
//创建vue实例
new Vue({
  //完成App组件 渲染
  render: h => h(App),
  router
}).$mount('#app')
