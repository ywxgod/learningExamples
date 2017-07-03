<template>
	<div class="header">{{appTitle}}, What can I do for you?</div>
</template>
<style scoped lang="scss">
	.header{
		height: 60px;
		background-color: #0ff;
	}
</style>
<script>
	export default {
		name: 'HeaderView',
		props: ['appTitle']
	}
</script>


