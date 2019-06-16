import {TableColumn} from 'element-ui';
import SettingsDialog from './dialog/SettingsDialog.vue';
import _ from 'lodash';
import Vue from 'vue';

/**
 * 启用列设置步骤：
 * 1. 将原来el-table-column标签替换为SettingsTableColumn标签
 * 2. 在列上增加相应的属性：
 *    showSettings：此列列头是否显示列设置图标
 *    canSetVisible：此列是否允许设置可见性
 *    canSetFixed: 此列是否允许设置冻结
 * 
 * 当此列类型为index，selection时，canSetFixed默认设置为false
 * 当为操作列时，canSetFixed默认设置为false
 * 
 */

function defaultRenderHeader(h, { column, $index }){
    if(column.showSettings){
        return h('span', [
            h('span',{'class':['settings-column-header']},column.label),
            h('i',{
                'class':{
                    'el-icon-setting':true,
                    settingsIcon:true
                },
                on:{
                    click: openSettingsDialog(column,this)
                }
            })
        ]);
    }
    return column.label;
}

function openSettingsDialog(column,proxy){
    return function(e){
        let dialog = createDialog(column, proxy);
    };
}

function createDialog(column, proxy){
    let el = document.createElement('div');
    document.body.appendChild(el);
    let DialogClazz = Vue.extend(SettingsDialog);
    let inputColumns = proxy.columns.filter(i=>i.property!=='opt');
    let dialog = new DialogClazz({el,propsData:{
        columnsData: _.cloneDeep(inputColumns),
        entityType: proxy.$parent.entityType
    }});
    dialog.$on('set-complete', newColumns=>{
        proxy.$parent.$emit('set-complete', newColumns);
    });
    return dialog;
}

export default {
    name: 'SettingsTableColumn',
    extends: TableColumn,
    props:{
        showSettings:{type: Boolean, default: false}, //此列出现设置按钮
        
        renderHeader: {type: Function, default: defaultRenderHeader}
    },
    created() {
        this.columnConfig.showSettings = this.showSettings;

        
    }
}
