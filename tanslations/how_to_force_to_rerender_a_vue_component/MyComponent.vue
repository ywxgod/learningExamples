<template>
	<div>
		Child Component
		{{numbers.toString()}}
	</div>
</template>
<script type="text/javascript">
	export default {
		data(){
			return {
				numbers:[1,2,3]
			}
		},
		mounted(){
			window.console.log('mounted');
		},
		beforeDestroy(){
			window.console.log('before destroyed');
		}
	};
</script>