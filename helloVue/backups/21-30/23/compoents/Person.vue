<!-- HTML结构标签 -->
<template>
  <div id="person">
    <h2>当前求和为：{{ sum }}</h2>
    <button @click = "add">点我Sum+1</button>
  </div>
</template>

<!-- setup语法糖标签 -->
<script lang="ts" setup>
    import { ref } from 'vue'
    import { onBeforeMount, onMounted } from 'vue'
    import { onBeforeUpdate, onUpdated } from 'vue'
    import { onBeforeUnmount, onUnmounted } from 'vue'

    // 数据
    let sum = ref(0)

    // 方法
    function add() {
        sum.value += 1
    }

    // 子组件的生命周期
    // 创建，如果script标签内有setup标记，则Vue3自动进行创建
    console.log("子组件创建")

    // 挂载前
    onBeforeMount(() => {
        console.log("子组件挂载前")
    }) 
    // 挂载完毕
    onMounted(() => {
        console.log("子组件挂载完毕")
    })
    // 更新前
    onBeforeUpdate(() => {
        console.log("子组件更新前") 
    })
    // 更新完毕
    onUpdated(() => {
        console.log("子组件更新完毕")
    })
    // 卸载前
    onBeforeUnmount(() => {
        console.log("子组件卸载前")
    })
    // 卸载完毕
    onUnmounted(() => {
        console.log("子组件卸载完毕")
    })
</script>

<!-- 样式标签 -->
<style scoped>
    button {
        margin: 5px;
    }
</style>
