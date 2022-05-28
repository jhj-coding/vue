<template>
  <div id="root">
    <button @click="getStudent()">获取学生信息</button>
  </div>
</template>

<script>
export default {
  name: "App",
  methods: {
    getStudent(){
      this.$http.get('http://192.168.1.108:8080/atguigu/hkdrjxy/getStudent.do').then(
        response=>{
          console.log(response.data)
        },
        error=>{
          console.log(error.message)
        }
      )
    }
  },
};
</script>