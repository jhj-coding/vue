<template>
  <div class="todo-footer" v-show="this.todos.length">
    <label>
      <input type="checkbox" v-model="isAll" />
      <!-- <input type="checkbox" :checked="isAll" @change="checkAll"/> -->
    </label>
    <span>
      <span>已完成{{ doneTodo }}</span
      >/全部{{ todos.length }}
    </span>
    <button class="btn btn-danger" @click="clearAllTodo">清楚已完成</button>
  </div>
</template>

<script>
export default {
  name: "MyFooter",
  props: ["todos", "checkAllTodo","clearAllTodo"],
  computed: {
    doneTodo() {
      return this.todos.reduce((pre, current) => {
        return pre + (current.done ? 1 : 0);
      }, 0);
    },
    // isAll(){
    //   return this.doneTodo==this.todos.length&&this.todos.length > 0;
    // }
    isAll: {
      get() {
        return this.doneTodo == this.todos.length && this.todos.length > 0;
      },
      set(value){
        this.checkAllTodo(value);
      }
    },
  },
  methods: {
    checkAll(e) {
      console.log(e.target.checked);
      this.checkAllTodo(e.target.checked);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}
.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}
.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}
.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>
