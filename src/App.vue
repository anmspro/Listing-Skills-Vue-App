<template>
  <div id="app">
    <h1> Skills </h1>
    <mySkills/>
  </div>
</template>

<script>
import mySkills from './components/Skills.vue'

export default {
  name: 'App',
  components: {
    mySkills
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,700');

  body {
    background-color: #EEEEEE;
    font-family: 'Montserrat', sans-serif;
    display: grid;
    grid-template-rows: auto;
    justify-items: center;
    align-items: center;
  }
  body, html {
    margin: 0;
    height: 100%;
  }
  #app {
      width: 50%;
  }

  body {
    background-color: #EEEEEE;
    font-family: 'Montserrat', sans-serif;
    display: grid;
    grid-template-rows: auto;
    justify-items: center;
    padding-top: 50px;
  }

  nav {
    padding: 20px 20px 20px 0;
  }

  nav a {
    padding: 10px;
    text-decoration: none;
    background: #fff;
    border-radius: 3px;
    color: rgb(0, 110, 255);
    font-weight: bold;
    margin-right: 15px;
  }

  h1 {
    text-align: center;
  }
</style>
