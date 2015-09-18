(function(){
	
	var selectedRange;
	var editor;
	var uploadUrl = 'http://localhost:3000/note/image/upload';
		
	$(function(){
		editor = $('#editor');
		editorPlaceholder = editor.find('div#placeholder');
		editor.on('click',function(e){
			if($.contains(editor[0],editorPlaceholder[0])){
				editorPlaceholder.remove();
			}
			restoreSelection();
		});
		init();
	})
	
	function showWarning(content){
		var warningStr = [
			'<div class="alert alert-danger alert-dismissible" role="alert">',
			'<button type="button" class="close" data-dismiss="alert" aria-label="Close">',
			'<span aria-hidden="true">&times;</span>',
			'</button>',
			'<strong>Warning!</strong> '+content,
			'</div>'
		].join('');
		$(document.body).prepend(warningStr);
	}
	
	function init(){
		var toolbar = $('div[data-role="editor-toolbar"]'),
			fileBtn = toolbar.find('button.glyphicon-file'),
			formFileBtn = toolbar.find('input[type=file][data-role]');
		editor.on('dragenter dragover', false).on('drop', function (e) {
			var dataTransfer = e.originalEvent.dataTransfer;
			e.stopPropagation();
			e.preventDefault();
			if (dataTransfer && dataTransfer.files && dataTransfer.files.length > 0) {
				insertFiles(dataTransfer.files);
			}
		});
		fileBtn.click(function(e){
			formFileBtn.click();
		});
		formFileBtn.change(function(){
			restoreSelection();
			if (this.type === 'file' && this.files && this.files.length > 0) {
				insertFiles(this.files);
			}
			//saveSelection();
		});
		editor.wysiwyg({dragAndDropImages: false});
	}
	
	function getCurrentRange() {
		var sel, range;
		if (window.getSelection) {
			sel = window.getSelection();
			if (sel.getRangeAt && sel.rangeCount) {
				range = sel.getRangeAt(0);
			}
		} else if (document.selection) {
			range = document.selection.createRange();
		} return range;
	}
	
	function saveSelection() {
		selectedRange = getCurrentRange();
	}
	
	function restoreSelection() {
		var selection;
		if (window.getSelection || document.createRange) {
			selection = window.getSelection();
			if (selectedRange) {
				try {
					selection.removeAllRanges();
				} catch (ex) {
					document.body.createTextRange().select();
					document.selection.empty();
				}
				selection.addRange(selectedRange);
			}
		}
		else if (document.selection && selectedRange) {
			selectedRange.select();
		}
	}
	
	function readFile(fileInfo,format){
		if(!FileUtil.isSupport()){
			showWarning('浏览器不支持本地文件读取功能！');
			return;
		}
		$.when(FileUtil.readFile(fileInfo, format)).done(function (data) {
			var paths = fileInfo.name.split('.');
			var fileType = paths[paths.length-1];
			FileUtil.uploadFile(data,uploadUrl,
				{"uid":111,"ext":fileType},
				function(data){
					console.log(data.path);
					execCommand('insertImage', data.path);
					editor.find('img').each(function(i,img){
						var src = $(this).attr('src');
						console.log(this);
						if(src.lastIndexOf(data.name)!=-1){
							$(this).css({
								'max-width': '100%',
								'height': 'auto',
								'margin': '0.5rem 0',
								'box-sizing': 'border-box'
							});
						}
					});
					//saveSelection();
					//document.execCommand('insertImage', 0,imgUrl);
				}
			);
			//execCommand('insertimage', data);
			//editor.trigger('image-inserted');
		}).fail(function (e) {
			showWarning('图片读取失败！');
		});
		
	}
	
	function execCommand(commandWithArgs, valueArg) {
		var commandArr = commandWithArgs.split(' '),
			command = commandArr.shift(),
			args = commandArr.join(' ') + (valueArg || '');

		var parts = commandWithArgs.split('-');

		if ( parts.length === 1 ) {
			document.execCommand(command, 0, args);
		}
		else if ( parts[0] === 'format' && parts.length === 2 ) {
			document.execCommand('formatBlock', false, parts[1] );
		}
	}
	
	function insertFiles(files){
		editor.focus();
		$.each(files, function (idx, fileInfo) {
			console.log(fileInfo);
			if (/^image\//.test(fileInfo.type)) {
				readFile(fileInfo,'binary');
			} else {
				showWarning('只允许加载图片(jpg,jpeg,png,bmp,gif)');
			}
		});
	}
	
})();