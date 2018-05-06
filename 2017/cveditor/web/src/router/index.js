import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/modules/login/Login';
import Main from '@/modules/main/Main';

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'Main',
			component: Main
		},
		{
			path: '/login',
			name: 'Login',
			component: Login
		}
	]
})
