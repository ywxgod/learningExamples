<template>
  <div id="app">
    <img src="./assets/logo.png">
    <hello></hello>
    <div>{{a}}-{{b}}</div>
    <div>{{xx}}-{{yy}}</div>
  </div>
</template>

<script>
import Hello from './components/Hello'
import { AppCtrl } from './AppCtrl';
export default {
	name: 'app',
	components: {
		Hello
	},
	beforeCreate() {
		new AppCtrl(this)
	}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
