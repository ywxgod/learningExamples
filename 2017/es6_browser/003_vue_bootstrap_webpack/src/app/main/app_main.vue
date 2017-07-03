<template>
	<div class="container">
		<div class="row">
			<HeaderView :appTitle="appTitle"></HeaderView>
		</div>
		<div class="row">
			{{a}}
		</div>
	</div>
</template>
<style lang="scss">
	html,body{
		padding: 0;
		margin: 0;
	}
</style>
<script>

	import HeaderView from '../view/header/header.vue';

	export default {
		name: 'AppMain',
		components: {HeaderView},
		props:['appTitle'],
		data: ()=>{
			return {
				a:'Hello vue+bootstrap.'
			}
		}
	}
</script>


