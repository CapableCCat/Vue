<!-- HTML结构标签 -->
<template>
  <div id="person">
    <h2>一辆{{ car.brand }}车，价值{{ car.price }}万元</h2>
    <button @click="changePrice">修改汽车的价格</button>    
    <hr>
    <h2>当前求和为：{{ sum }}</h2>
    <button @click = "changeSum">点我 sum + 1</button>
  </div>
</template>

<!-- setup语法糖标签 -->
<script lang="ts" setup>
    import { reactive } from 'vue'
    import { ref } from 'vue'

    // 数据
    let car = ref({ brand: '奔驰', price: 100 })
    let sum = ref(0)

    // 方法
    function changePrice() {
        car.value.price += 10
    }

    function changeSum() {
        sum.value += 1
    }
</script>

<!-- 样式标签 -->
<style scoped>
    button {
    margin: 5px;
    }

    li {
    font-style: 20px;
    }
</style>
