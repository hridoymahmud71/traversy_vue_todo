<template>
  <div id="app">
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
  },
  data(){
    return {
      todos:[
          {
            id:1,
            title:"Todo One",
            completed:true
          },
          {
            id:2,
            title:"Todo Two",
            completed:false
          },
          {
            id:3,
            title:"Todo Three",
            completed:true
          },
      ],
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
