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
<b>VueMediator</b> - a mixins object for vue component
<br/>
<b>BaseMediator</b> - extends from BaseController.
<br/>

Usage:

```bash
npm install vue-mec

import * as VueMec from 'vue-mec';
```

examples:

<b>App.vue</b>

```bash
<script>
    import { AppCtrl } from './AppCtrl';
    import * as VueMec from 'vue-mec';

    export default {
        name: 'app',
        mixins: [VueMec.VueMediator,AppCtrl]
        components: {
            Hello
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
		this.dispatch(false,'haha',data);
    }

    fail(error){
        console.log(error);
        super.error(error);
    }

}
```

<b>AppCtrl.js</b>

```bash
import * as VueMec  from 'vue-mec';
import {GetDataCommand} from './GetDataCommand';

export AppCtrl = {

    methods:{
        ...VueMec.mapCommands({
            onClick: TestCommand
        }),
        $mapEvents(){
            this.$attachEvent(false,'xxxx', GetDataCommand);
            this.$attachEvent(false,'haha',(data)=>{
                console.log(data);
            });
            this.$callEvent(false,'xxxx',11,22,33);
        }

    }

    data(){
        return {
            a:1,b:2
        }
    }

}


```

<p>
<b>description:</b>
<p>

we can write a command class extends from AjaxCommand or BaseCommand<br/>
execute methods in command will be called defaultly.