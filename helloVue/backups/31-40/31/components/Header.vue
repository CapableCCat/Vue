<template>
    <h2 class = "title">Vue3 路由测试</h2>
</template>

<script setup lang = "ts">
    import { onMounted } from 'vue';
    import { onUnmounted } from 'vue';

    // 生命周期
    // 挂载完毕
    onMounted(() => {
        console.log("Header挂载完毕")
    }) 

    onUnmounted(() => {
        console.log("Header卸载完毕")
    })
</script>

<style scoped>
    .title {
        text-align: center;
        word-spacing: 5px;
        margin: 30px 0;
        height: 70px;
        line-height: 70px;
        background-image: linear-gradient(45deg, gray, white);
        border-radius: 10px;
        box-shadow: 0 0 2px;
        font-size: 30px;
    }
</style>