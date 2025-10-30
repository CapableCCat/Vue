<!-- HTML结构标签 -->
<template>
  <div id="person">
    <h2>姓名：{{ person.name }}</h2>
    <h2>年龄：{{ person.age }}</h2>
    <h2>年龄：{{ nianling }}</h2>
    <button @click = "changeName">修改姓名</button>
    <button @click = "changeAge">修改年龄</button>
  </div>
</template>

<!-- setup语法糖标签 -->
<script lang="ts" setup>
    import { reactive, toRefs, toRef } from 'vue';

    // 数据
    let person = reactive({
        name: "张三",
        age: 18
    })

    let { name, age } = toRefs(person)
    let nianling = toRef(person, "age")
    console.log(nianling)
    console.log(nianling.value)

    // 方法
    function changeName() {
        name.value += "~"
        console.log(name.value, person.name)
    }
    function changeAge() {
        age.value += 1
    }
</script>

<!-- 样式标签 -->
<style scoped>
    button {
        margin: 5px
    }
</style>
