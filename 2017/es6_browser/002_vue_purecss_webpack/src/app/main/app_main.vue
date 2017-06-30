<template>
	<div>
		<HeaderView></HeaderView>
		<div>{{a}},{{b}},{{userId}},{{flag}}</div>
	</div>
</template>
<style lang="scss">
	html,body{
		padding: 0;
		margin: 0;
		height: 100%
	}


</style>
<script>

	import HeaderView from '../view/header/header.vue';

	export default {
		name: 'AppMain',
		components: {HeaderView},
		data(){
			return {
				a:1,
				b:2
			}
		},
		methods:{

		},
		props:['userId','flag']
	}
</script>


