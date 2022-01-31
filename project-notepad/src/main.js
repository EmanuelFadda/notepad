import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import SchermataIniziale from './components/SchermataIniziale'
import SchermataAggiungi from './components/SchermataAggiungi'

Vue.use(VueRouter);
Vue.config.productionTip = false

const routes=[
  {
    path: '/',
    component: SchermataIniziale,
  },
  {
    path: '/SchermataAggiungi',
    component: SchermataAggiungi,
  }
];

const router= new VueRouter({routes});

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
