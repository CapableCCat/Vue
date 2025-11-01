<!-- HTML结构标签 -->
<template>
  <div id="person">
    <h1>情况五：监视上述的多个数据</h1>
    <h2>姓名：{{ person.name }}</h2>
    <h2>年龄：{{ person.age }}</h2>
    <h2>汽车：{{ person.car.car1 }}, {{ person.car.car2 }}</h2>
    <button @click = "changeName">修改姓名</button>
    <button @click = "changeAge">修改年龄</button>
    <button @click = "changeFirstCar">修改第一台车</button>
    <button @click = "changeSecondCar">修改第二台车</button>
    <button @click = "changeAllCar">修改所有车</button>

  </div>
</template>

<!-- setup语法糖标签 -->
<script lang="ts" setup>
    import { reactive, watch } from 'vue'

    // 数据
    let person = reactive({
        name: "张三",
        age: 18,
        car: {
            car1: "奔驰",
            car2: "宝马"
        }
    })

    // 方法
    function changeName() {
        person.name += "~"
    }

    function changeAge() {
        person.age += 1
    }

    function changeFirstCar() {
        person.car.car1 = "奥迪"
    }

    function changeSecondCar() {
        person.car.car2 = "大众"
    }

    // 由于Car是对象内的对象属性
    // 所以可以直接整体修改
    // 类似于ref的整体修改方式
    // 此时Car被整体替换
    // 地址值发生根本性变化
    // 与下方watch监视Car对象有关联
    function changeAllCar() {
        person.car = {
            car1: "比亚迪",
            car2: "小米"
        }
    }

    // 监视
    // 情况五：监视上述的多个数据
    watch([() => person.name, () => person.car], (newValue, oldValue) => {
        console.log("发生变化", newValue, oldValue)
    }, {
        deep: true
    })
</script>

<!-- 样式标签 -->
<style scoped>
    button {
        margin: 5px
    }
</style>
