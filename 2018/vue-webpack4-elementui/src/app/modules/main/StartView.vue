<template>
    <div class="start-view">
        <el-button type="primary" v-for="i in 50" :key="i">{{i}}</el-button>
    </div>
</template>
<style lang="scss" scoped>
    .start-view {
        height: 100%;

        display: flex;
        flex-wrap: wrap;
    }

</style>
<script>
    export default {
		name: 'StartView'
    };
</script>

