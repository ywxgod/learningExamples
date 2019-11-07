window.onload = function(){
	
	var input = document.getElementById('file');
	
	input.onchange = function(files){
		console.log(input.files);
		var files = input.files;
		if(files.length==0) return;

		var formData = new FormData();
		files = Array.prototype.slice.call(files);
		files.forEach(function(file){
			formData.append('files[]', file);
		});

		axios.post('http://localhost:3000/users/upload', formData, {
			headers:{
				'Content-Type': 'multipart/form-data'
			},
			onUploadProgress: function(e){
				console.log(e.loaded, e.total);
			}
		}).then(function(res){
			console.log(res.data);
		})

	};



};