<template>
	<my-component ref="child" :key="componentKey"></my-component>
</template>
<script>
	import MyComponent from './MyComponent.vue';
	export default {
		components: { MyComponent },
		data() {
			return {
				componentKey: 0
			};
		},
		methods: {
			forceRerender(){
				this.componentKey += 1;
			}
		},
		mounted(){
			this.forceRerender();
		}
	};
</script>