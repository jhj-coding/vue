<template>
  <div>
    我是MyHome内容
    <li v-for="m in n" :key="m.id">
      <!-- <router-link :to="'/MyHome/News?id=${m.id}'">News{{m.id}}</router-link> -->

      <!-- <router-link :to="{
        path:'/MyHome/News',
        query:{
          id:m.id
        }
      }">News{{m.id}}</router-link> -->
      <router-link :to="{
        name:'News',
        query:{
          id:m.id
        }
      }">News{{m.id}}</router-link>
    </li>
    <router-link to="/MyHome/Message">Message</router-link>
    <div>
      <!-- 指定组件的呈现位置 -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyHome",
  data(){
    return {
      n:[{id:'1'}]
    }
  }
};
</script>