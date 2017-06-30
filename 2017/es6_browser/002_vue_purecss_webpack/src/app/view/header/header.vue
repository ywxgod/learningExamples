<template>
	<div class="header">
		{{label}}
	</div>
</template>
<style scoped lang="scss">
	$height: 100px;

	.header{
		height: $height;
		background-color: #ff0;
	}
</style>
<script>
	export default {
		name: 'HeaderView',
		data(){
			return {
				label: 'my header'
			}
		}
	};
</script>


