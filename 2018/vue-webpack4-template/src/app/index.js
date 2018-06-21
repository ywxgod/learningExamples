/**
 * Created by wyin on 05/12 012.
 */
import Vue from 'vue';
import router from './router';
import MainView from './modules/main/MainView.vue';
import './eleui';

import '@assets/fix-browser.scss';
import '@assets/fix-eleui.scss';


new Vue({
	el: '#app',
    router,
    components: { MainView },
	render: h => h(MainView)
});