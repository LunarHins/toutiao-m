
//导入模块。

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import  './styles/index.less'
//加载vant组件库
import Vant from 'vant'
import 'vant/lib/index.css'
//全局注册vant
Vue.use(Vant);

//引入第三方包。
import 'amfe-flexible'






Vue.config.productionTip = false



//new一个vue实例，把router等包配置到根实例中
// 通过render方法，把App根组件渲染到#app节点中。
//找到index.html中id为app的div
//index.html就是我们SPA单页面应用程序中的单页面。
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
