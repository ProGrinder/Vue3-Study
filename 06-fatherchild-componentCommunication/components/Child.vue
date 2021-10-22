
<template>
    <h2>06-Child子级组件</h2>
    <h3>msg:{{msg}}</h3>
    <!-- <h3>count:{{count}}</h3> -->

    <button @click="emitXxx">分发事件</button>
 
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
export default defineComponent({
    name: 'Child',
    props: ['msg'],

    // setup细节问题
    // 1.setup在beforeCreate之前就会执行
    // 此时Child组件还没有被Create出来，也就是说，在setup函数中this不能使用
    // 2.setup和data中的属性会合并为组件中的属性，setup和method中的方法会合并为组件中的方法
    beforeCreate(){
        console.log('beforeCreate执行了')
    },

    setup(props, context){
        //props参数是一个proxy对象,只包含了父级组件给子级组件传递的参数[msg]
        console.log(props)

        //context参数是一个对象,里面有attrs对象(),emit方法(分发事件),slots对象(插槽)
        console.log(context)
        console.log('==========')
        console.log('setup执行了')

        const showFaker=()=>{
            console.log('setup中的showFaker')
        }

        // 按钮点击事件的回调函数
        function emitXxx(){
            context.emit('xxx','+++')
        }

        return {
            // setup中返回一个对象，对象中的属性和方法可以在html中直接使用
            showFaker,
            emitXxx
        }
    },
    
    mounted(){
        console.log(this)
    },

    // 数据
    data(){
        return{
            count:10
        }
    },
    // 方法
    methods:{
        showMaker(){
            console.log('methods中的showMaker')
        }
    }
})
</script>

<style>
</style>