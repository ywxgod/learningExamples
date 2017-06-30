<template>
	<div>
		<HeaderView></HeaderView>
		<div>{{a}},{{b}},{{userId}},{{flag}}</div>
		<button id="myBtn" class="pure-button pure-button-primary">Pure Button</button>
	</div>
</template>
<style lang="scss">


</style>
<script>

	import HeaderView from '../view/header/header.vue';
	import 'purecss';

	export default {
		name: 'AppMain',

		mounted(){
			//let btn = this.$el.querySelector('#myBtn');
			//btn.className = 'pure-button'+' '+'pure-button-primary';
		},
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


