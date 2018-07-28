import Vue from 'vue';
import 'element-ui/lib/theme-chalk/index.css';

import { 
    Button, Menu, MenuItem, Icon, Badge, DatePicker, Tooltip,
    Submenu, Checkbox, Tree, Popover, Input,Collapse,CollapseItem,
    Loading, Table, Select, Option, FormItem,CheckboxGroup, Dropdown,
    Form, TableColumn, Dialog,Row,Col,Pagination, Radio, RadioGroup, RadioButton,
    DropdownMenu, DropdownItem
} from 'element-ui';

let eleComponents = [
    Button, Menu, MenuItem, Icon, Badge, Radio, RadioGroup, RadioButton,
    Submenu, Checkbox, Tree, Popover, Input,Collapse,CollapseItem,
    Loading, Table, Select, Option, FormItem,CheckboxGroup,Tooltip,
    Form, TableColumn,Dialog,Row,Col,Pagination,DatePicker, Dropdown,
    DropdownMenu, DropdownItem

];

Vue.prototype.$ELEMENT = {size: 'small'};
eleComponents.forEach(C=>{
    Vue.use(C);
}); 


export default eleComponents;