/* import {VueMediator,executeCommand,mapCommands} from './src/controller/VueMediator';
import {EventBus} from './src/event/EventBus';
import {BaseModel} from './src/model/BaseModel';
import {AjaxCommand} from './src/service/AjaxCommand';
import {AjaxService} from './src/service/AjaxService';
import {BaseCommand} from './src/service/BaseCommand';
import {SimpleCommand} from './src/service/SimpleCommand';
import {IDUtil} from './src/utils/IDUtil'; */
//import {FunUtil} from './src/utils/FunUtil';
const VueMediatorObj = require('./src/controller/VueMediator');
export const EventBus = require('./src/event/EventBus');
export const BaseModel = require('./src/model/BaseModel');
export const AjaxCommand = require('./src/service/AjaxCommand');
export const AjaxService = require('./src/service/AjaxService');
export const BaseCommand = require('./src/service/BaseCommand');
export const SimpleCommand = require('./src/service/SimpleCommand');
export const IDUtil = require('./src/utils/IDUtil');
export const FunUtil = require('./src/utils/FunUtil');
export const VueMediator = VueMediatorObj.VueMediator;
export const executeCommand = VueMediatorObj.executeCommand;
export const mapCommands = VueMediatorObj.mapCommands;


