// 程序的主入口文件(main.ts)

// 引入createApp,创建对应应用，产生应用实例对象
import { createApp } from 'vue'
// 引入App组件，是所有组件的父级组件
import App from './App.vue'

// 创建App应用返回对应实例对象，调用mount方法进行挂载，挂在到#app(id为app的标签中)
createApp(App).mount('#app')
