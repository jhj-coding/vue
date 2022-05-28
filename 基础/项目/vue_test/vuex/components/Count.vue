<template>
  <div>
    <h1>当前求和为：{{sum}}</h1>
    <h1>当前求和乘10:{{bigSum}}</h1>
    <h1>我在{{school}},学习{{subject}}</h1>
    <select v-model.number="n">
      <option :value="1">1</option>
      <option :value="2">2</option>
      <option :value="3">3</option>
    </select>
    <button @click="increment(n)">+</button>
    <button @click="decrement(n)">-</button>
    <button @click="incrementOdd(n)">当前求和为奇数再加</button>
    <button @click="incrementWait(n)">等一等再加</button>
  </div>
</template>

<script>
import {mapState,mapGetters,mapActions,mapMutations} from 'vuex'
export default {
  name: "Count",
  data(){
      return{
          n:1
      }
  },
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
    //借助mapAction生成对应的方法，方法中会调用dispatch去联系actions
    ...mapActions({
        incrementOdd:'jiaOdd',
        incrementWait:'jiaWait'
    })
    //   incrementOdd(){
    //       this.$store.dispatch('jiaOdd',this.n);
    //   },
    //   incrementWait(){
    //       this.$store.dispatch('jiaWait',this.n);
    //   }
  },
};
</script>

<style scope>
    button{
        margin-left: 5px;
    }
</style>