<template>
  <h2>06-App父级组件</h2>
  <h3>{{msg}}</h3>

  <button @click="msg += '==='">更新数据</button>
  <hr/>

  <Child :msg="msg" msg2="真香" @xxx="xxx"></Child>
  

</template>

<script lang="ts">
// 引入当前页下方的defineComponnent
import { defineComponent, ref} from 'vue';
// 引入子级组件
import Child from './components/Child.vue'
export default defineComponent({
  name: 'App',

  //注册组件
  components:{
    Child
  },

  setup(){
    const msg = ref('你就是个cjb')

    function xxx(txt: string){
      msg.value += txt
    }
    return {
      msg,
      xxx
    }
  }
 
});
</script>


<style>

</style>
