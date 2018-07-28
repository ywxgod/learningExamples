<template>
    <div class="main-view">
        <div class="header"></div>
        <div class="main-content">
            <router-view></router-view>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    .main-view {
        height: 100%;
        min-width: 960px;
        overflow: hidden;

        .header {
            height: 60px;
            background-color: bisque;
        }

        .main-content {
            height: calc(100% - 60px);
        }

    }

</style>
<script>
    export default {
		name: 'MainView'
    };
</script>

