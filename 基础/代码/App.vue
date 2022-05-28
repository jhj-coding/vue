<template>
     <div>
        <School/>
    </div>
</template>
<script>
// 引入组件
import School from './School'
export default {
    name:'App',
    // 写vm中的属性
    component:{
        School:School,
    }
}
</script>