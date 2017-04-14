webix.ready(function(){
	
	var props = ['name','email','age','a','b','c','d','e','f','g'];
	var items = [];
	var columns = [];
	
	for(var i=0;i<20;i++){
		var item = {};
		props.forEach(function(prop,j){
			item[prop] = prop+'-'+'ABCDEFGHIJK'.substr(Math.floor(Math.random()*11),1);
		})
		item.id = i;
		items[i] = item;
	}
	console.log(items);
	
	props.forEach(function(prop,i){
		var column = {};
		column.id = prop;
		column.header = prop;
		column.width = 40 + Math.floor(Math.random()*61);
		column.adjust = true;
		column.tooltip = prop+'1';

		if(i===props.length-1){
            column.fillspace = 1;
			//column.header = {content: 'headerMenu'};
		}
		columns[i] = column;
	});
	console.log(columns);
	

    var gridView = {
        view: 'datatable',
        columns: columns,
        data: items
    };
    var btn1 = {
        view:"button",
        label:'test button'
    };
    var btn2 = {
        view:"button",
        label:'test button2'
    };
    var btn3 = {
        view:"button",
        label:'test button3'
    };
    var label = {
        view:'label',
        label:'xxxxxxxxx'
    };


	
	table = webix.ui({
		//container: 'testA', //默认是body，占满屏幕。
        autoheight:true,
        autowidth:true,
        rows:[
            {
                id:'layout1',
                rows:[]
            },
            {
                id:'layout2',
                rows:[]
            },
            {
                id:"scrollview",
                autoheight:true,
                rows:[{id:'spacer'}] //先放占位符，保证布局起作用，如果直接动态加入gird，布局会失效。
            }
        ]
	});

    setTimeout(function(){
        $$('layout1').addView(btn1);
        $$('layout1').addView(btn2);
        $$('layout1').addView(btn3);
        $$('layout2').addView(label);
    },100);
    setTimeout(function(){
        $$('scrollview').addView(gridView,0); //删除占位
        $$('scrollview').removeView('spacer');
    },3000);
	
});

