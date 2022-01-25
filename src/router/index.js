import Vue from "vue"
import Router from "vue-router"

// Import pages
import FormularBuilder from "@/pages/FormularBuilder"

Vue.use(Router)

const routes = [
	{ path: '/', component: FormularBuilder },
	{ path: '/formular', component: FormularBuilder },
]

export default new Router({
	routes,
	base: '/formular-builder/',
	mode: 'history',
	linkExactActiveClass: 'active'
})
