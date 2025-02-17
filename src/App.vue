<!--
 * @Author: your name
 * @Date: 2025-02-17 17:07:26
 * @LastEditors: your name
 * @LastEditTime: 2025-02-17 17:11:39
 * @Description: 
 * @FilePath: /love-demo/src/App.vue
-->
<template>
  <div id="app">
    <Love msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import Love from './components/love.vue'

export default {
  name: 'App',
  components: {
    Love
  }
}
</script>

<style>
#app{
  padding: 0;
  margin: 0;
}
body{
  margin: 0;
  padding: 0;
}
</style>
