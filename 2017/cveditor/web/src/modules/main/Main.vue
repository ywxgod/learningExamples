<style scoped>
	
</style>

<template>
	<div class="main">
		<AppHeader></AppHeader>
		<SVGCanvas></SVGCanvas>
		<Toolbar></Toolbar>
	</div>
</template>
<script>

	import AppHeader from '../header/Header.vue';
	import SVGCanvas from '../canvas/Canvas.vue';
	import Toolbar from '../toolbar/Toolbar.vue';

	import {MainMediator} from './MainMediator';

	export default {
		name: 'Main',
		components: { AppHeader,SVGCanvas,Toolbar },
		beforeCreate(){
			new MainMediator(this);
		}
	}
</script>