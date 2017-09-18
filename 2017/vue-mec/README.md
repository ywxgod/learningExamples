Some es6 class utils.
<br/>
### [vue-mec](https://github.com/ywxgod/learningExamples/tree/master/2017/vue-mec) in github.
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

event - event dispatcher base on vue.
<br/>
baseController - controller adapte for vue.
<br/>

Usage:

```bash
npm install vue-mec

import {event,baseController} from 'vue-mec';
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
    import Hello from './components/Hello'
    import {appCtrl} from './AppCtrl';
    import {event,baseController} from 'vue-mec';
    export default {
        name: 'app',
        mixins:[appCtrl,event,baseController],
        components: {
            Hello
        },
        mounted(){

        }
    }
</script>
```

<b>GetDataCommand.js</b>

```bash
import {AjaxCommand,AjaxService} from 'vue-mec';

export class GetDataCommand extends AjaxCommand{

    constructor(){
        super();
        this._service = new AjaxService(this);
    }

    execute(){
        console.log(arguments);
        let url = 'https://jsonplaceholder.typicode.com/posts';
        this._service.send(url);
    }

    success(data,response){
        console.log(data,response);
    }

    fail(error){
        console.log(error);
        super.error(error);
    }

}
```

<b>AppCtrl.js</b>

```bash
import {GetDataCommand} from './GetDataCommand';

export let appCtrl = {
    mounted(){
        this.on('abc', (a,b,c,d)=>{
            console.log(a,b,c,d);
        })
        this.executeCommand(GetDataCommand,1,2,3,4);

    }
}
```

<b>Hello.vue</b>

```bash
<script>

    import {baseController,event} from 'vue-mec';

    export default {
        name: 'hello',
        mixins:[baseController,event],
        data () {
            return {
            msg: 'Welcome to Your Vue.js App'
            }
        },
        mounted(){
            setTimeout(()=>{
                this.emit('abc', 1,2,3,4);
            },3000)
        }
    }
</script>
```

<p>
<b>description:</b>
<p>
mixins event in your vue component<br/>
mixins baseController in your vue component<br/>
we can write a command class extends from AjaxCommand or BaseCommand<br/>
execute methods in command will be called defaultly.