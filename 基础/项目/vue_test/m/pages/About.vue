<template>
  <div>
      <!-- 我是About内容{{$route.params.id}} -->
      我是About内容1{{id}}
  </div>
</template>

<script>
export default {
    name:'About',
    props:['id']
}
</script>

<style>

</style>