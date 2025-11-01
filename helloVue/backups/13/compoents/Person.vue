<!-- HTML结构标签 -->
<template>
  <div id="person">
    <h1>情况一：监视【ref】定义的【基本数据】类型</h1>
    <h2>当前求和为：{{ sum }}</h2>
    <button @click = "changeSum">点我sum+1</button>
  </div>
</template>

<!-- setup语法糖标签 -->
<script lang="ts" setup>
    import { ref, watch } from 'vue';

    // 数据
    let sum = ref(0)

    // 方法
    function changeSum() {
        sum.value += 1
    }

    // 监视
    watch(sum, (newValue, oldValue) => {
        console.log("sum变化了", newValue, oldValue)
    })

    // 停止监视
    const stopWatch = watch(sum, (newValue, oldValue) => {
        console.log("sum变化了", newValue, oldValue)
        if(newValue >= 10) {
            stopWatch()
        }
    })
</script>

<!-- 样式标签 -->
<style scoped>

</style>
