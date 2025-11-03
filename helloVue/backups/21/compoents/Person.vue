<!-- HTML结构标签 -->
<template>
  <div id="person">
   
  </div>
</template>

<!-- setup语法糖标签 -->
<script lang="ts" setup>
    import { type personInter, type personArray } from "@/types"

    // 接口 (TS)
    // let person: personInter = {
    //     id: "p01",
    //     name: "张三",
    //     age: 60
    // }

    // 泛型 + 自定义类型
    // 自定义类型
    let personList: personArray = [
        {id: "p01", name: "张三", age:18 },
        {id: "p02", name: "李四", age:19 },
        {id: "p03", name: "王五", age:20 },
        {id: "p04", name: "六", age:21 },
        {id: "p05", name: "七", age:22 },
    ]

    // 泛型
    // let personList: Array<personInter> = [
    //     {id: "", name: "", age: },
    //     {id: "", name: "", age: }
    // ]
</script>

<!-- 样式标签 -->
<style scoped>
    button {
        margin: 5px;
    }
</style>
