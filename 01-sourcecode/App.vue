<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
</template>

<script lang="ts">
// lang=ts, 标明该处可以书写ts代码

// 引入当前页下方的defineComponnent
import { defineComponent } from 'vue';

// 引入HelloWorld.vue中的HelloWorld组件
import HelloWorld from './components/HelloWorld.vue';

// 声明defineComponent配置对象:定义一个name为app的组件，其内部注册了子级组件HelloWorld
export default defineComponent({
  name: 'App',
  components: {
    HelloWorld
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
