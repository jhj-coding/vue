<template>
  <div class="container">
    <Category title="美食">
      <img slot="center" src="http://img3.redocn.com/tupian/20151022/shanfengjpg_5164336.jpg" alt="">
      <a slot="footer" href="https://baidu.com">更多美食</a>
    </Category>
    <Category title="游戏">
      <ul slot="center">
          <li v-for="(item,index) in games" :key="index">{{item}}</li>
      </ul>
    </Category>
    <Category title="电影">
      <video slot="center" src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4" controls></video>
      <template slot="footer">
        <div>
          <a href="https://baidu.com">更多美食</a>
          <a href="https://baidu.com">更多美食</a>
        </div>
      </template>
    </Category>
  </div>
</template>

<script>
import Category from './components/Category.vue'
export default {
  name: "App",
  components:{Category},
  data(){
        return{
            foods:['火锅','烧烤','小龙虾','牛排'],
            games:['红色警戒','穿越火线','劲舞团','超级玛丽'],
            films:['《教父》','《拆弹专家》','《你好，李焕英》','《尚硅谷》']
        }
    }
};
</script>
<style>
  .container{
    display: flex;
    justify-content: space-around;
  }
  img,video{
    width: 100%;
  }
</style>