<!-- HTML结构标签 -->
<template>
  <div id="person">
    <h1>情况二：监视【ref】定义的【对象类型】数据</h1>
    <h2>姓名：{{ person.name }}</h2>
    <h2>年龄：{{ person.age }}</h2>
    <button @click = "changeName">修改姓名</button>
    <button @click = "changeAge">修改年龄</button>
    <button @click = "changePerson">修改整个人</button>
  </div>
</template>

<!-- setup语法糖标签 -->
<script lang="ts" setup>
    import { ref, watch } from 'vue';

    // 数据
    let person  = ref({
        name: "张三",
        age: 18
    })

    // 方法
    function changeName() {
        person.value.name += "~"
    }

    function changeAge() {
        person.value.age += 1
    }

    // 【ref】定义的【对象类型】数据
    // 在此处通过修改【字面量】的形式替换掉整个Person,
    // Person内属性的地址值发生根本性变化
    // 区别于 reactive 
    function changePerson() {
        person.value = {
            name: "李四",
            age: 25
        }
    }

    // 监视
    // 情况一：监视【ref】定义的【对象类型】数据
    // 监视的是对象的地址值
    // 若想监视对象内部属性的变化，需要手动开启深度监视
    watch(person, (newValue, oldValue) => {
        console.log("person变化了", newValue, oldValue)
    }, {
        deep: true,
        // immediate: true
    })
    // watch的第一个参数是：被监视的数据
    // watch的第二个参数是：监视的回调
    // watch的第三个参数是：配置对象（deep, immediate等等......）
</script>

<!-- 样式标签 -->
<style scoped>
    button {
        margin: 5px
    }
</style>
