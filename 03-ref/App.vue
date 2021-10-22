<template>
  <h2>03-setup和ref的基本使用</h2>
  <h3>{{count}}</h3>
  <button @click="updateCount">增加</button>
</template>

<script lang="ts">


// 引入当前页下方的defineComponnent
import { defineComponent, ref } from 'vue';


export default defineComponent({
  name: 'App',
  //setup API函数，VUE项目初始化时自动执行一次

  // vue2实现
  // data(){
  //   return {
  //       count: 0,  //属性
  //   }
  // },
  // methods:{
  //   updateCount(){
  //     this.count++ //方法
  //   }
  // }

  setup(){
    //let count = 0;    //不是响应式数据

    //ref是一个函数，用于定义一个响应式数据对象,对象中有value属性
    const count = ref(0)
    function updateCount(){
      count.value++
    }

    return {
      // 返回一个对象
      //属性
      count,
      //方法
      updateCount
    }
    
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
