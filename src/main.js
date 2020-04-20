import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import router from './router'
import store from './store'
import HighchartsVue from 'highcharts-vue'

Vue.use(Vuex)
Vue.use(VueRouter)
Vue.use(HighchartsVue)

Vue.config.productionTip = false

new Vue({
	router,
	store,
	render: h => h(App),
}).$mount('#app')
