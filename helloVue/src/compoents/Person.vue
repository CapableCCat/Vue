<!-- HTML结构标签 -->
<template>
  <div id="person">
    <h2>当前水温： {{ temp }}℃</h2>
    <h2>当前水位： {{ height }}cm</h2>
    <button @click = "changeTemp">水温+10</button>
    <button @click = "changeHeight">水位+10</button>

  </div>
</template>

<!-- setup语法糖标签 -->
<script lang="ts" setup>
    import { ref, watch, watchEffect } from 'vue';

    // 数据
    let temp = ref(10)
    let height = ref(2)

    // 方法
    function changeTemp() {
        temp.value += 10
    }

    function changeHeight() {
        height.value += 10
    }

    // 监视
    watch([temp, height], (value) => {
        // 从value中解构赋值
        // 获取最新的水温(newTemp)，最新的水位(newHeight)
        let [newTemp, newHeight] = value
        // 逻辑
        if(newTemp >= 60 || newHeight >= 80) {
            console.log("给服务器发送请求")
        }
    })
</script>

<!-- 样式标签 -->
<style scoped>
    button {
        margin: 5px;
    }
</style>
