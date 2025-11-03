<!-- HTML结构标签 -->
<template>
  <div id="person">
    <h2>一辆{{ car.brand }}车，价值{{ car.price }}万元</h2>
    <button @click="changePrice">修改汽车的价格</button>
    <hr />
    <ul>
      <li v-for="gid in games" :key="gid.id">{{ gid.name }}</li>
    </ul>
    <button @click = "changeFirstGame">修改第一个游戏</button>
    <hr>
    <h2>测试：{{ obj.a.b.c }}</h2>
    <button @click = "changeObj">测试</button>
  </div>
</template>

<!-- setup语法糖标签 -->
<script lang="ts" setup>
    import { reactive } from 'vue'

    // 数据
    let car = reactive({ brand: '奔驰', price: 100 })
    let games = reactive([
        { id: 'g01', name: '崩坏·星穹铁道' },
        { id: 'g02', name: '原神' },
        { id: 'g03', name: '崩坏三' },
        { id: 'g04', name: '崩坏学院2' },
        { id: 'g05', name: '绝区零' },
    ])
    let obj = reactive({
        a: {
            b: {
                c: 666
            }
        }
    })

    // 方法
    function changePrice() {
    car.price += 10
    }

    function changeFirstGame() {
        games[0].name = '星布谷地'
    }

    function changeObj() {
        obj.a.b.c = 999
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
