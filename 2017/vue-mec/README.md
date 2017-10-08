Some es6 class utils.
<br/>
### [vue-mec](https://github.com/ywxgod/learningExamples/tree/master/2017/vue-mec) in github.
### [test-vue-mec](https://github.com/ywxgod/learningExamples/tree/master/2017/test-vue-mec) in github.
<br/>

<b>EventBus</b> - singleton event bus class.
<br/>
<b>EventDispatcher</b> - a class responsible for dispatch or listen to events.
<br/>
<b>AjaxService</b> - a class call axios to send ajax requests.
<br/>
<b>BaseCommand</b> - a base class to do a task.
<br/>
<b>AjaxCommand</b> - extends to the BaseCommand
<br/>
<b>BaseController</b> - a base controller class for vue component
<br/>
<b>BaseMediator</b> - extends from BaseController.
<br/>

Usage:

```bash
npm install vue-mec

import {BaseMediator} from 'vue-mec';
import {AjaxCommand,AjaxService} from 'vue-mec';
```

or

```bash
import * as mec from 'vue-mec';
```

examples:

<b>App.vue</b>

```bash
<script>
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
```

<b>GetDataCommand.js</b>

```bash
import {AjaxCommand,AjaxService} from 'vue-mec';

export class GetDataCommand extends AjaxCommand{

    constructor(){
        super(...arguments);
        this._service = new AjaxService(this);
    }

    execute(){
        console.log(arguments);
        let url = 'https://jsonplaceholder.typicode.com/posts';
        this._service.send(url);
    }

    success(data,response){
		this.dispatch('haha',data);
    }

    fail(error){
        console.log(error);
        super.error(error);
    }

}
```

<b>AppCtrl.js</b>

```bash
import {BaseMediator}  from 'vue-mec';
import {GetDataCommand} from './GetDataCommand';

export class AppCtrl extends BaseMediator{

    mounted(){
		
		this.addListener(false,'xxxx', GetDataCommand);
		this.addListener(false,'haha',(data)=>{
			console.log(data);
		});
		console.log('mounted...');
		this.dispatch(false,'xxxx',11,22,33);
    }
	
	onClick(vm,e){
		console.log(vm,e);
	}

    data(){
        return {
            a:1,b:2
        }
    }

    computed(){
        return {
            xx(){
                return this.vm.a+this.vm.b;
            }
        }
    }

    watch(){
        return {
            a(newv,oldv){
                console.log(newv,'a');
            }
        }
	}
	
	destroy(){
		super.destroy();
		console.log('destroyed...');
	}
}


```

<p>
<b>description:</b>
<p>

we can write a command class extends from AjaxCommand or BaseCommand<br/>
execute methods in command will be called defaultly.