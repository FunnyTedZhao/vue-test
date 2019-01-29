<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <div>
      <router-link to="/">首页</router-link>
      <router-link to="/parentRouter">Router练习</router-link>
      <router-link to="/ColorJs">ColorJs实验</router-link>
      <router-link to="/GlobalProps">provide/inject与mixins</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
import MixinsSalutatory from './mixins/salutatory.js'

export default {
  name: 'App',
  provide () {
    return {
      app: this
    }
  },
  mixins: [MixinsSalutatory],
  data () {
    return {}
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
