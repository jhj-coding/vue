#笔记
不用id 用ref 获取时用this.$refs.ref的值 组件也可以使用获取其实例对象vc
使用
<school ref="sch"/> this.$refs.sch

props 让组件接受外部传过来的数据
<Demo name="xxx>传数据
接受数据
限定类型
props：{
    name:Number
}

props和data中的所有东西不能重名
限定必传 默认值
props:{
    name:{
        type:Number,
        required:true,
        default:'老王'
    }
}

props中的属性都是只读，不能修改 如果要修改
可以在data中重定义例如
data(){
    return
    {
        myname:this.name
    }
}然后利用函数对myname进行修改
使用 
<school :name="name"/>
混入 mixin
 可以把多个组件公用的配置提取成一个混入对象
 使用 
 定义混合

export default const a={
     vm中写的都可以写
 }
 引入
 import {a} form '文件'

 局部使用在vc配置项中写入mixins：['a']
 全局混合：Vue.mixin(xxx)

 插件 plugins.js
 export default{
     install(Vue){

     }
 }
 引入
 import plugins from '/.plugins'

 Vue.use(plugins)

 scoped 作用域 不冲突 lang可以写less
 <style scoped></style>

组件间的数据传递
    自定义事件
    子组件给父组件
    父组件中 定义事件
    <Demo @事件名=“方法”>
    方法中的参数可以根据触发事件的参数获取
    （a,...b）第一个参数a接收 后面的参数的都用b数组接收
    第二种
    <Demo ref="vc中ref的对象名">
    绑定事件
    mounted(){
        this.$refs.对象名.$on("事件名"，方法)
    }
    如果让自定义事件触发事件修饰符 需要将$on换成$修饰符名字就好了

    触发事件自定义事件 this.$emit("事件名",数据)
    解绑自定义事件 this.$off("事件名")
    组件上也可以绑定原生DOM事件，需要使用native修饰符。
    
    事件总线
    new Vue({
        befoeCreate(){
            Vue.prototype.$bus=this //安装事件总线
        }
    })

    绑定事件
    mounted(){
        this.$bus.$on("事件名"，方法) 可箭头函数可methods中定义
    }

    触发事件 this.$emit("事件名",数据)
    在组件中写入 beforeDestory this.$off("事件名") 解绑事件

    消息订阅与发布
    npm i pubsub-js
    import pubsub from 'pubsub-js'
    接受数据的组件订阅消息
    mounted(){
        this.pid=pubsub.subscribe("事件名",方法)
    }
    触发消息
    pubsub.publish("事件名",数据)
    取消订阅
    PubSub.unsubscribe(this.pid)
    如果用到组件间的通信 建议使用事件总线

 在DMO节点更新完之后执行
 this.$nextTick(function(){
        //在DMO节点更新完之后执行
        this.$refs.inputTitle.focus();
      })

Vue封装的过渡与动画

v-enter 进入的起点
v-enter-active进入过程中
v-enter-to 进入的终点

v-leave 进入的起点
v-leave-active进入过程中
v-leave-to 进入的终点

需要过渡的元素用
<transition name="替换v的名字"></transition>
在css中用.替换v的名字-enter...
若用多个过渡
<transition-group></transition-group>
每个元素都要指定一个key值

跨域问题
第一种解决一个服务器的请求
在vue.config.js中
module.exports={
    pages:{
        index:{
            entry:'src/main.js'
        },
    },
    lintOnSave:false,
    devServer:{
        proxy:'http://121.5.251.250:8080'
    }
}
请求
 axios.get('http://192.168.1.108:8080/hkdrjxy/getStudent.do').then(
        response=>{
          console.log(response.data)
        },
        error=>{
          console.log(error.message)
        }
      )
    }
第二种 可配置多个
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
            '前缀名':{
                target:'代理地址',
                pathRewrite:{
                    '^/前缀名':''
                },
                ws:true,//用于支持websocket
                changeOrigin:true//用于控制请求头的host值
            },
        }
    }
    请求
 axios.get('http://192.168.1.108:8080/前缀名/hkdrjxy/getStudent.do').then(
        response=>{
          console.log(response.data)
        },
        error=>{
          console.log(error.message)
        }
      )
    }

 插槽
  在子组件指定位置插入html结构，也是一种组件间通信的方式，是用于父组件=》子组件
  子组件 默认
  <template>
  <div class="category">
      <h3>{{title}}分类</h3>
      <!-- 定义一个插槽 ，等待组件使用者进行填充 -->
      <slot>我是一个默认值，如果没有传就显示</slot>
  </div>
</template>
父用
<Category title="游戏">
    <ul>
        <li v-for="(item,index) in games" :key="index">{{item}}</li>
    </ul>
</Category>

子组件具名
<template>
  <div class="category">
      <h3>{{title}}分类</h3>
      <!-- 定义一个插槽 ，等待组件使用者进行填充 -->
      <slot name="center">我是一个默认值，如果没有传就显示</slot>
  </div>
</template>
父用
<Category title="游戏">
    <ul slot="center">
        <li v-for="(item,index) in games" :key="index">{{item}}</li>
    </ul>
</Category>
作用域插槽


v-model.number 收到的数据强制往number转换

Vuex插件 在src store index.js下引入
//引入Vue
import { setTimeout } from 'core-js'
import Vue from 'vue'
//引入vuex插件
import Vuex from 'vuex'
Vue.use(Vuex)
// 准备actions 用于想用组件中的动作
const actions={
    jia(context,value){
        context.commit('jia',value)
    },
    jian(context,value){
        context.commit("jian",value)
    },
    jiaOdd(context,value){
        if(context.state.sum%2){
            context.commit('jia',value)
        }
    },
    jiaWait(context,value){
        setTimeout(() => {
            context.commit('jia',value)
        }, 500);
    }
}
//准备mutations 用于操作数据
const mutations={
    jia(state,value){
        state.sum+=value;
    },
    jian(state,value){
        state.sum-=value;
    }
}
//准备state 用于存储数据
const state={
    sum:0,
    school:'尚硅谷',
    subject:'前端'
}
//准备getters 用于将state中的数据进行加工
const getters={
    bigSum(state){
        return state.sum*10;
    }
}
// 创建并暴露store
export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})


 在main.js下配置store
 //入口文件
//引入Vue
import Vue from 'vue'
//引入App组件 他是所有组件的父组件
import App from './App.vue'

//引入store
import store from './store/index'
//关闭生产提示
Vue.config.productionTip = false
//使用插件

//创建vue实例
new Vue({
  //完成App组件 渲染
  render: h => h(App),
  //
  store,
  //挂载
  beforeCreate(){
    Vue.prototype.$bus=this;
  }
}).$mount('#app')


import {mapState,mapGetters,mapMutations,mapMutations} from 'vuex'
computed:{
    //   借助mapState生成计算属性 从state中读取数据
    ...mapState(['sum','school','subject']),
    //   借助mapgetters生成计算属性，从getter中读取数据
    ...mapGetters(['bigSum'])
  },
  methods: {
      //借助mapMutations生成对应的方法，方法中会调用commit 去联系mutations
    //   increment(){
    //       this.$store.commit('jia',this.n);
    //   },
    //   decrement(){
    //       this.$store.commit("jian",this.n);
    //   },
    ...mapMutations({
        increment:'jia',
        decrement:'jian'
    }),


模块化
namespace vuex
    const countOptions={
    actions:{

    },
    mutations:{

    },
    state:{

    },
    getters:{

    }
}
const personOptions={
    actions:{

    },
    mutations:{

    },
    state:{

    },
    getters:{

    }
}
// 创建并暴露store
export default new Vuex.Store({
    modules:{
        countOptions,
        personOptions
    }
})

使用
 ...mapState(['countOptions','personOptions']),

 用里面的东西就要 countOptions.方法
 或者
 ...mapState('countOptions',[里面的方法名])
 前提在personOptions配置里面开启命名空间 namespaced：true

路由
vue-router 下载
在src router index.js下
路由组件放到src pages下
//创建路由器
import VueRouter from 'vue-router'
import About from '../pages/About'
import MyHome from '../pages/MyHome'
import News from '../pages/News'
import Message from '../pages/Message'
//创建并暴露一个路由器
export default new VueRouter({
    //无#
    mode:'history',
    routes: [{
        name:'about',
        //:参数名占位符
        path: '/about/:id',
        component: About,
        //若布尔值为真，就会把该路由有组件收到的params参数，以props形式传给组件
        // props:true
        // 将路由的query参数,以props形式传给组件
        props($route){
            return {id:$route.query.id}
        }
    },
    {
        path:'/MyHome',
        component:MyHome,
        children:[
            {
                //路由器名字
                name:'News',
                path:'News',
                component:News,
            },
            {
                path:'Message',
                component:Message
            }
        ]
    }
    ]

})

使用
  <router-link
      :to="{
        //使用params必须使用name
        name: 'about',
        params: {
          id: 1,
        },
      }"
      >About</router-link
    >
    <router-link to="/MyHome">MyHome</router-link>
    <div>
      <!-- 指定组件的呈现位置 -->
      <router-view></router-view>
    </div>

    router-link中replace属性
    作用，控制路由跳转时操作浏览器历史纪录的模式 路由跳转时默认是push push是追加记录 replace是替换记录

按钮跳转
methods: {
    pushShow(m) {
      this.$router.push({
        name: "News",
        query: {
          id: m.id,
        },
      });
    },
  },
  缓存路由
  作用，让步展示的路由组件保持挂载不销毁
  <!-- 不写组件名和include将所有的都缓存 -->
  <keep-alive include="组件名"> 
    <router-view></router-view>
  </keep-alive>

  路由守卫 进行权限控制
  初始化执行时每次切换路由前执行
  全局前守卫
  router.brforeEach((to,from,next)=>{
      //判断路由是否需要
      if(to.meta.isAuth){
          //放行
          next()
      }
  })
   全局后守卫
   初始化执行，每次路由切换后执行
  router.afterEach((to,from,next)=>{
      //判断路由是否需要
      if(to.meta.isAuth){
          //放行
          next()
      }
  })

  独享守卫
  routes: [{
        name:'about',
        //:参数名占位符
        path: '/about/:id',
        component: About,
        //若布尔值为真，就会把该路由有组件收到的params参数，以props形式传给组件
        // props:true
        // 将路由的query参数,以props形式传给组件
        props($route){
            return {id:$route.query.id}
        },
        meta:{isAuth:true},
        beforeEnter(to,from,next){
                    //判断路由是否需要
            if(to.meta.isAuth){
                //放行
                next()
            }
        }
    },

    组件内守卫
    进入守卫
    beforeRouteEnter(to,from,next){

    }
    离开守卫
    beforeRouteLeave(to,from,next){

    }


    UI
    移动端
    vant 
    Cubu UI
    Mint UI

    Element UI
    IView UI