Some es6 class utils.

EventBus - singleton event bus class.
EventDispatcher - a class responsible for dispatch or listen to events.
AjaxService - a class call axios to send ajax requests.
BaseCommand - a base class to do a task.
AjaxCommand - extends to the BaseCommand

event - event dispatcher base on vue.
baseController - controller adapte for vue.

Usage:

npm install vue-mec

import {event,baseController} from 'vue-mec';
import {AjaxCommand,AjaxService} from 'vue-mec';

or

import * as mec from 'vue-mec';

examples:

App.vue

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

GetDataCommand.js

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

AppCtrl.js

import {GetDataCommand} from './GetDataCommand';

export let appCtrl = {
    mounted(){
        this.on('abc', (a,b,c,d)=>{
            console.log(a,b,c,d);
        })
        this.executeCommand(GetDataCommand,1,2,3,4);

    }
}

Hello.vue

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


description:

mixins event in your vue component
mixins baseController in your vue component
we can write a command class extends from AjaxCommand or BaseCommand
execute methods in command will be called defaultly.