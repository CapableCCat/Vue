<template>
    <div class = "home">
        <img src="http://www.atguigu.com/images/index_new/logo.png" alt="">
    </div>
</template>

<script setup lang = "ts">
    import { onMounted } from 'vue';
    import { onUnmounted } from 'vue';
    import { useRouter } from 'vue-router';

    const router = useRouter()

    // 生命周期
    // 挂载完毕
    onMounted(() => {
        console.log("Home挂载完毕")
        setTimeout(() => {
            router.push('/news')
            console.log("3s later...")
        }, 3000)

    }) 

    onUnmounted(() => {
        console.log("Home卸载完毕")
    })
</script>

<style scoped>
    .home {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
    }
</style>