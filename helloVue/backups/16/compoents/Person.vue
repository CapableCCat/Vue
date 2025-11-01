<!-- HTML结构标签 -->
<template>
  <div id="person">
    <h1>情况四：监视响应式对象中的某个属性</h1>
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
    // 情况四：监视响应式对象中的某个属性
    // 当该属性为【基本数据】类型时
    // 需要写成函数式（getter函数）
    watch(() => person.name, (newValue, oldValue) => {
        console.log("person.name变化了", newValue, oldValue)
    })

    // 此时对Car对象中任意单独属性进行更改，都会被监视到
    // 但是如果对整个Car函数进行更改，则无法被监视
    // 因为对象内对象的替换是整体替换，地址值发生根本性改变
    // 而且即便开启深度检测也无法检测整体变化
    watch(person.car, (newValue, oldValue) => {
        console.log("person.car变化了", newValue, oldValue)
    })
    // 此时将Car对象包裹成函数
    // 但是发生两极反转
    // 对于对象内任意单独属性进行修改，无法被监视
    // 而修改整个Car对象之后，则会被监视
    // () => person.car 其实是在使用Car对象的整体地址值
    // 所以此时监视的是Car对象的整体地址值
    watch(() => person.car, (newValue, oldValue) => {
        console.log("person.car变化了", newValue, oldValue)
    })

    // 将两者合并之后则无论Car对象属性内，还是整体修改Car属性
    // 都能被监视到
    watch(() => person.car, (newValue, oldValue) => {
        console.log("person.car变化了", newValue, oldValue)
    }, {
        deep:true
    })

    // 总结：
    // 如果监视的是对象内的属性，建议写成函数式
    // 注意：
    // 若监视对象，其实是监视对象的地址值
    // 若需要关注对象内部，则需要手动开启深度监视 ( {deep:true} )
</script>

<!-- 样式标签 -->
<style scoped>
    button {
        margin: 5px
    }
</style>
