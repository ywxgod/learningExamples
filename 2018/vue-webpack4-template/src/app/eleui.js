import Vue from 'vue';
import 'element-ui/lib/theme-chalk/index.css';

import { 
    Button, Menu, MenuItem, Icon, Badge,
    Submenu, Checkbox, Tree, Popover, Input,Collapse,CollapseItem,
    Loading, Table, Select, Option, FormItem,CheckboxGroup,
    Form, TableColumn, Dialog,Row,Col,Pagination, Radio, RadioGroup, RadioButton
} from 'element-ui';

let eleComponents = [
    Button, Menu, MenuItem, Icon, Badge, Radio, RadioGroup, RadioButton,
    Submenu, Checkbox, Tree, Popover, Input,Collapse,CollapseItem,
    Loading, Table, Select, Option, FormItem,CheckboxGroup,
    Form, TableColumn,Dialog,Row,Col,Pagination
];

Vue.prototype.$ELEMENT = {size: 'small'};
Vue.config.productionTip = false;

eleComponents.forEach(C=>{
    Vue.use(C);
}); 


export default eleComponents;
