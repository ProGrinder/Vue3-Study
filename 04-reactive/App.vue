<template>
  <h2>04-reactive的使用</h2>
  <h3>姓名: {{user.name}}</h3>
  <h3>性别: {{user.gender}}</h3>
  <h3>年龄: {{user.age}}</h3>
  <h3>妻子: {{user.wife}}</h3>

  <hr>

  <button @click="updateUser">更新用户信息</button>

  <!-- 需求: 显示用户相关信息，点击按钮，可以更新相关数据 -->

</template>

<script lang="ts">

// 引入当前页下方的defineComponnent
import { defineComponent, reactive} from 'vue';

export default defineComponent({
  name: 'App',

  setup(){
    // 定义区 

    // reactive函数，注册了一个名为user的proxy类型代理对象，该代理对象是响应式数据
    const user: any = reactive({
      name:'梁志斌',
      age: 20,
      wife:{
        name:'null',
        age: 18,
        cars: ['奔驰','马萨拉蒂','保时捷']
      }
    })

    console.log(user)

    const updateUser = () =>{
      user.name='🤡'
      user.age +=2
      user.wife.name='🤡女'
      user.wife.cars[1] = '玛莎拉蒂'

      //添加属性
      user.gender = '男'
      //删除属性
      delete user.age
    }

    return{
      //相当于暴露出去
      user,
      updateUser
    }
  }
});
</script>


<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
