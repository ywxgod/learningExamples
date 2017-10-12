import {BaseCommand} from 'vue-mec';
import {AppModel,toolShapeMap} from '@/models/AppModel';

export class SelectTypeCommand extends BaseCommand{

    execute(selectedType,cb){
        let appModel = AppModel.getInstance();
        appModel.currentTool = selectedType;
        appModel.currentShape = toolShapeMap[selectedType];
        if(cb) cb();
    }

}