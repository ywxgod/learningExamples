<style scoped>
    .canvas{
		/* overflow: auto; */
        padding: 20px;
        background-color: #ccc;
	}
    
</style>
<template>
    <div>
        <div class="canvas" ref="canvas"></div>
    </div>
</template>
<script>

    import {CanvasCtrl} from './CanvasCtrl';
    import {MouseCtrl} from './MouseCtrl';

    export default {
        name: 'SVGCanvas',
        mixins: [CanvasCtrl,MouseCtrl]
    }
</script>
