<script>
    //1. 新建组件继承自BaseView
    //2. 创建mixin对象，实现$init方法
    //3. 将mixin对象混合到新建组件
    import { VueMixins } from "./VueMixins";

    export default {
        
        name:'BaseView',
        mixins: [VueMixins],
        props:{
            listenResize: Boolean
        }
        
    }
</script>
