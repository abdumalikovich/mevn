import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import router from './router'
import store from './store'
import AOS from 'aos'
import 'aos/dist/aos.css'
import VueMeta from 'vue-meta'

Vue.use(Vuex)
Vue.use(VueRouter)
Vue.use(VueMeta)
// Vue.use(HighchartsVue)

Vue.config.productionTip = false

new Vue({
	created() {
		AOS.init()
	},
	router,
	store,
	render: h => h(App),
}).$mount('#app')
