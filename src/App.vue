<template>
  <div id="app">
    <Header />
    <AddTodo v-on:add-todo="addTodo" />
    <Todos v-bind:todos="todos" v-on:del-todo="deleteTodo" />
  </div>
</template>

<script>
import Header from "./components/layouts/Heder";
import AddTodo from "./components/layouts/AddTodo";
import Todos from "./components/Todos";
import axios from "axios";

export default {
  name: "app",
  components: {
    Header,
    AddTodo,
    Todos
  },
  data() {
    return {
      todos: [],
      baseApi: "https://jsonplaceholder.typicode.com/todos",
      limit: 20
    };
  },
  methods: {
    deleteTodo(id) {
      this.todos = this.todos.filter(todo => todo.id != id);
      axios
        .delete(`${this.baseApi}/${id}`)
        .get(`${this.baseApi}?_limit=${this.limit}`)
        .catch(err => window.console.log(err));
    },
    addTodo(newTodo) {
      const { title, completed } = newTodo;
      axios
        .post(`${this.baseApi}?_limit=${this.limit}`, {
          title,
          completed
        })
        .then(res => (this.todos = [...this.todos, res.data]))
        .catch(err => window.console.log(err));
    }
  },
  created() {
    axios
      .get(`${this.baseApi}?_limit=${this.limit}`)
      .then(res => (this.todos = res.data))
      .catch(err => window.console.log(err));
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.btn {
  display: inline-block;
  border: none;
  background: #555;
  color: #fff;
  padding: 7px 2px;
  cursor: pointer;
}
.btn:hover {
  background: #666;
}
</style>
