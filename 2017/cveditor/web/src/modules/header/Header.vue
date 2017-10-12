<style>
	
</style>
<template>

	<div>
		<NavDrawer ref="navDrawer" class="light-green darken-1"></NavDrawer>
		<v-toolbar dark class="deep-purple">
			<v-toolbar-side-icon @click.stop="toggleSideNav"></v-toolbar-side-icon>
			<v-toolbar-title class="white--text">Title</v-toolbar-title>
			<v-spacer></v-spacer>
			<v-btn icon class="white--text">
				<v-icon>search</v-icon>
			</v-btn>
			<v-btn icon class="white--text">
				<v-icon>apps</v-icon>
			</v-btn>
			<v-btn icon class="white--text">
				<v-icon>refresh</v-icon>
			</v-btn>
			<v-btn icon class="white--text">
				<v-icon>more_vert</v-icon>
			</v-btn>
		</v-toolbar>
	</div>

</template>
<script>

	import NavDrawer from '../nav_drawer/NavDrawer.vue';

	export default {
		name: 'AppHeader',
		components: {NavDrawer},
		data(){
			return {
				visible: false
			}
		},
		methods:{
			toggleSideNav(){
				let navDrawer = this.$refs.navDrawer;
				navDrawer.flag = !navDrawer.flag;
			}
		},
		mounted(){
			
		}
	}
</script>
