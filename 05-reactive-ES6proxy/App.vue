<template>
  <h2>05-reactive的实现原理, 代理和反射的作用</h2>
  <h3>姓名: {{user.name}}</h3>
  <h3>性别: {{user.gender}}</h3>
  <h3>年龄: {{user.age}}</h3>
  <h3>妻子: {{user.wife}}</h3>

</template>

<script type='text/javascript'>
  //target对象
  const user = {
    name: '佐助',
    age: 20,
    wife:{
      name: '小樱',
      age: 19
    }
  }

  //⭐Vue3中的reactive实际上，底层实现使用了ES6 的proxy(target,handler)=> Reflect

  //使用proxy函数,将target对象变为proxy对象，使其成为响应式数据
  //参数1: user=>target对象
  //参数2: handler=>handler对象，用来监视数据，以及对数据进行操作
  const proxyUser = new Proxy(user,{
    // 获取目标对象的属性值
    get(target, prop){
      console.log('get方法被调用')

      //通过Reflect的静态函数操作,反射到target对象
      return Reflect.get(target,prop)
    },
    
    // 修改和添加新属性
    set(target,prop,val) {
      console.log('set方法被调用')
      return Reflect.set(target, prop, val)
    },

    // 删除目标对象的某个属性值
    deleteProperty(target, prop){
      console.log('delete方法被调用')
      return Reflect.deleteProperty(target,prop)
    }
  })

  // 通过代理对象获取目标对象的属性值
  console.log(proxyUser.name)
  // 通过代理对象更新目标对象的属性值
  proxyUser.name='鸣人'
  console.log(user)
  // 通过代理对象向目标对象添加一个新属性
  proxyUser.gender = '男'
  console.log(user)
  // 通过代理对象删除目标对象的某个已有属性
  delete proxyUser.name
  console.log(user)

  // 尝试更新目标对象某个属性对象中的属性值
  
  proxyUser.wife.name = '雏田'
  console.log(user)


// // 引入当前页下方的defineComponnent
// import { defineComponent} from 'vue';


// export default defineComponent({
//   name: 'App',
// });
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
