//入口文件
//引入Vue
import Vue from 'vue'
//引入App组件 他是所有组件的父组件
import App from './App.vue'
//引入插件
import vueResource from 'vue-resource'
//关闭生产提示
Vue.config.productionTip = false
//使用插件
Vue.use(vueResource)
//创建vue实例
new Vue({
  //完成App组件 渲染
  render: h => h(App),
  //挂载
  beforeCreate(){
    Vue.prototype.$bus=this;
  }
}).$mount('#app')
