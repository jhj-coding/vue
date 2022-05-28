<template>
  <li>
    <label>
      <input
        type="checkbox"
        :checked="todo.done"
        @change="handleCheck(todo.id)"
      />
      <!-- 也能实现 不推荐 修改了props 但没有检测到 -->
      <!-- <input type="checkbox" v-model="todo.done"/> -->
      <span>{{ todo.title }}</span>
    </label>
    <button class="btn btn-danger" @click="handledelete(todo.id)">删除</button>
  </li>
</template>

<script>
export default {
  name: "MyItem",
  props: ["todo"],
  methods: {
    handleCheck(id) {
      this.$bus.$emit('checkTodo',id)
    },
    handledelete(id) {
      if (confirm("确定删除吗？")) {
        this.$bus.$emit('deleteTodo',id)
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}
li label {
  float: left;
  cursor: pointer;
}
li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}
li button {
  float: right;
  display: none;
  margin-top: 3px;
}
li:before {
  content: initial;
}
li:last-child {
  border-bottom: none;
}
li:hover {
  background-color: #ddd;
}
li:hover button {
  display: block;
}
</style>
