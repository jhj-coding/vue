<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <MyHeader :receive="receive"/>
        <MyList :todos="todos" :checkTodo="checkTodo" :deleteTodo="deleteTodo"/>
        <MyFooter :todos="todos" :checkAllTodo="checkAllTodo" :clearAllTodo="clearAllTodo"/>
      </div>
    </div>
  </div>
</template>

<script>
import MyHeader from "./components/MyHeader.vue";
import MyList from "./components/MyList.vue";
import MyFooter from "./components/MyFooter.vue";
export default {
  name: "App",
  components: {
    MyHeader,
    MyList,
    MyFooter,
  },
  data(){
    return{
      todos:[
        {id:'0001',title:'吃饭',done:true},
        {id:'0002',title:'睡觉',done:false},
        {id:'0003',title:'开车',done:true}
      ]
    }
  },
  methods: {
    receive(x){
      this.todos.unshift(x);
    },
    checkTodo(id){
      this.todos.forEach((todo)=>{
        if(todo.id==id){
          todo.done=!todo.done
        }
      })
    },
    deleteTodo(id){
      this.todos=this.todos.filter((todo)=>{
        return todo.id!=id
      })
    },
    checkAllTodo(done){
      this.todos.forEach((todo)=>{
        todo.done=done
      })
    },
    clearAllTodo(){
      this.todos=this.todos.filter((todo)=>{
        return !todo.done
      })
    }
  },
};
</script>
  
<style>
body {
  background: #fff;
}
.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px rgba(255, 255, 255, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}
.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}
.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}
.btn:focus {
  outline: none;
}
</style>
