<template>
    <div class="main-view">
        <!-- <HeaderView></HeaderView> -->
        <div class="main-content">
            <router-view></router-view>
        </div>
    </div>
</template>
<style lang="scss">
    .main-view{
        height: 100%;
        min-width: 1440px;
        overflow: hidden;
        .main-content{
            height: calc(100% - 60px);
        }

    }

</style>
<script>
    export default {
		name: 'MainView'
		
    };
</script>