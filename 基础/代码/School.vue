<template>
     <div class="demo">
        <h2>学校名称：{{schoolName}}</h2>
    </div>
</template>
<script>
export default {
    name:'School',
    // 写vm中的属性
    data(){
        return {
            schoolName:"河南科技大学"
        }
    }
}
</script>
<style>
    .demo{
        background-color: bisque;
    }
</style>