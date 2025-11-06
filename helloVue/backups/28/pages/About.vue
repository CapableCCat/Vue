<template>
    <div class = "about">
        <h2>大家好，欢迎来到尚硅谷直播间</h2>
    </div>
</template>

<script setup lang = "ts">
    import { onMounted } from 'vue';
    import { onUnmounted } from 'vue';

    // 生命周期
    // 挂载完毕
    onMounted(() => {
        console.log("About挂载完毕")
    }) 

    onUnmounted(() => {
        console.log("About卸载完毕")
    })
</script>

<style scoped>
    .about {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        color: rgb(85, 84, 84);
        font-size: 18px;
    }
</style>