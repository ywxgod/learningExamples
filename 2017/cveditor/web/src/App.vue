<template>
	
	<div id="app">
		<v-app>
		<v-alert v-if="!isSupportSVG" error :value="!isSupportSVG">
			SVG not supported
		</v-alert>
		<router-view v-if="isSupportSVG"></router-view>
		</v-app>
	</div>
	
</template>

<script>

	import {AppMediator} from './AppMediator';

	export default {
		name: 'app',
		beforeCreate(){
			new AppMediator(this);
		}
	}
</script>

<style>
	html, body{
		overflow: hidden;
		margin: 0;
		padding: 0;
	}
	#app {
		overflow: hidden;
	}
</style>
