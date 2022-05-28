<template>
  <div class="category">
      <h3>{{title}}分类</h3>
      <!-- 定义一个插槽 ，等待组件使用者进行填充 -->
      <slot name="center">我是一个默认值，如果没有传就显示</slot>
      <slot name="footer">我是一个默认值，如果没有传就显示</slot>
  </div>
</template>

<script>
export default {
    name:'Category',
    props:['title']
}
</script>

<style>
    .category{
        background-color: skyblue;
        width: 200px;
        height: 300px;
    }
    h3{
        text-align: center;
        background-color: orange;
    }
</style>