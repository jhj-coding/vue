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