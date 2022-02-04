import Vue from "vue"
import Router from "vue-router"

// Import pages
import FormularBuilder from "@/pages/FormularBuilder"

Vue.use(Router)

const routes = [
	{ path: '/', component: FormularBuilder },
	{ path: '/formula', component: FormularBuilder },
]

export default new Router({
	routes,
	base: '/formula-builder/',
	mode: 'history',
	linkExactActiveClass: 'active'
})
