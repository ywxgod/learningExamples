(function(){
	var SuperEditor = function(){

		var view, fileName, isDirty=false,
			unsaveMsg = '未保存的修改将会丢失，确定吗？',
			unsaveTitle = '放弃修改';

		var markDirty = function(){
			isDirty = true;
		};
		var markClean = function(){
			isDirty = false;
		};
		var checkDirty = function(){
			if(isDirty) { return unsaveMsg; }
			return false;
		};

		window.addEventListener('beforeunload', checkDirty, false);

		var jump = function(e){
			var hash = location.hash;
			if(hash.indexOf('/')>-1){
				var parts = hash.split('/');
				var fileNameEl = document.getElementById('file_name');
				view = parts[0].substring(1)+'-view';
				fileName = parts[1];
				fileNameEl.innerHTML = fileName;
			}else{
				if(!isDirty||confirm(unsaveMsg,unsaveTitle)){
					markClean();
					view = 'browser-view';
					if(hash!='#list'){
						location.hash = '#list';
					}
				}else{
					location.href = e.oldURL;
				}
			}
			document.body.className = view;
		};

		jump();

		window.addEventListener('hashchange', jump, false);

		var editVisualButton = document.getElementById('edit_visual'),
			visualView = document.getElementById('file_contents_visual'),
			visualEditor = document.getElementById('file_contents_visual_editor'),
			visualEditorDoc = visualEditor.contentDocument,
			editHtmlButton = document.getElementById('edit_html'),
			htmlView = document.getElementById('file_contents_html'),
			htmlEditor = document.getElementById('file_contents_html_editor');

		visualEditorDoc.designMode = 'on';

		visualEditorDoc.addEventListener('keyup', markDirty, false);
		htmlEditor.addEventListener('keyup', markDirty, false);

		var updateVisualEditor = function(content){
			visualEditorDoc.open();
			visualEditorDoc.write(content);
			visualEditorDoc.close();
			visualEditorDoc.addEventListener('keyup', markDirty, false);
		};

		var updateHtmlEditor = function(content){
			htmlEditor.value = content;
		};

		var toggleActiveView = function(){
			if(htmlView.style.display=='block'){ //display html view
				editVisualButton.className = 'split_left active';
				visualView.style.display = 'block';
				editHtmlButton.className = 'split_right';
				htmlView.style.display = 'none';
				updateVisualEditor(htmlEditor.value);
			}else{ //display visual editor view
				editHtmlButton.className = 'split_right active';
				htmlView.style.display = 'block';
				editVisualButton.className = 'split_left';
				visualView.style.display = 'none';

				var x = new XMLSerializer();
				var content = x.serializeToString(visualEditorDoc);
				updateHtmlEditor(content);
			}
		};

		editVisualButton.addEventListener('click', toggleActiveView, false);
		editHtmlButton.addEventListener('click', toggleActiveView, false);

		var visualEditorToolbar = document.getElementById('file_contents_visual_toolbar');
		var richTextAction = function(e) {
			var command,
				node = (e.target.nodeName === 'BUTTON') ? e.target : e.target.parentNode;
			if (node.dataset){
				command = node.dataset.command;
			}else{
				command = node.getAttribute('data-command');
			}

			var doPopupCommand = function(command, promptText, promptDefault){
				visualEditorDoc.execCommand(command, false, prompt(promptText, promptDefault));
			};
			if(command=='createLink'){
				doPopupCommand(command, 'Enter link URL: ', 'http://www.baidu.com');
			}else if(command === 'insertImage'){
				doPopupCommand(command, 'Enter Image URL: ', 'http://tqyb.com.cn/data/obtMap/BCGZ_TempA.png');
			}else if(command==='insertMap'){
				if(navigator.geolocation){
					node.innerHTML = 'loading...';
					navigator.geolocation.getCurrentPosition(function(pos){
						var coords = pos.coords.latitude+','+pos.coords.longitude;
						var img = 'http://maps.googleapis.com/maps/api/staticmap?markers='+coords+'&zoom=11&size=200*200&sensor=false';
						visualEditorDoc.execCommand('insertImage', false, img);
						node.innerHTML = 'Location Map';
					},function(err){
						console.log(err);
					}, {
						
						timeout: 10 * 1000 * 1000,
						maximumAge: 0
					});
				}else{
					alert('Geolocation not available', 'No geolocation data');
				}
			}else{
				visualEditorDoc.execCommand(command);
			}

		};
		visualEditorToolbar.addEventListener('click', richTextAction, false);

	};

	var init = function(){
		new SuperEditor();
	};

	window.addEventListener('load', init, false);
})();