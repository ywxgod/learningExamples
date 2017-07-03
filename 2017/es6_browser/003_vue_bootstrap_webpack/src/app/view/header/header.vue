<template>
	<div>
		<div class="header">{{appTitle}}, What can I do for you?</div>
		<button class="btn btn-primary">button primary</button>
		<button class="btn btn-default">button default</button>
		<button class="btn btn-warning">button warning</button>
		<button class="btn btn-danger">button danger</button>
		<button class="btn btn-link">button link</button>
		<div class="dropup">
			<button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
				Dropup
				<span class="caret"></span>
			</button>
			<ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
				<li>
					<a href="#">Action</a>
				</li>
				<li>
					<a href="#">Another action</a>
				</li>
				<li>
					<a href="#">Something else here</a>
				</li>
				<li role="separator" class="divider"></li>
				<li>
					<a href="#">Separated link</a>
				</li>
			</ul>
		</div>
		<span class="glyphicon glyphicon-envelope"></span>
		<img src="../../assets/images/test_small_img.jpg"><br>
		<img src="../../assets/images/test_big_img.jpg" class="img-responsive" alt="Responsive image">
		<ul class="list-group">
			<li class="list-group-item" v-for="item in testData" v-bind:key="item.id">
				{{item.id}} - {{item.title}}<br>
				{{item.body}}
			</li>
		</ul>
	</div>
</template>
<style scoped lang="scss">
	.header {
		height: 60px;
		background-color: #0ff;
	}
</style>
<script>
export default {
	name: 'HeaderView',
	data(){
		return {
			testData: []
		};
	},
	props: ['appTitle'],
	mounted(){
		let root = 'https://jsonplaceholder.typicode.com';
		let p = new Promise((resolve,reject)=>{
			$.ajax({
				url: root+'/posts',
				method: 'GET'
			}).done((data)=>{
				resolve(data);
			}).fail((err)=>{
				reject(err);
			});
		});
		p.then((data)=>{
			this.testData = data;
			console.log(data);
		}).catch((err)=>{
			console.log(err);
		})
	},
}
</script>


