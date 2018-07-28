import Vue from 'vue';
import router from './router';
import MainView from '@app/modules/main/MainView';
import './ele';
import '@assets/fix-ele.scss';
import '@assets/app.scss';

Vue.config.productionTip = false;

new Vue({
	el: '#app',
    router,
    components: { MainView },
	render: h => h(MainView)
});