<!-- HTML结构标签 -->
<template>
  <!-- 返回的结果不尽相同 -->
  <!-- a = "1+1", b = 2, c = "x", d = 9 -->
  <!-- a, c 中双引号里面是为字符串，b, d中双引号里面是表达式 -->
  <!-- ref不作为字符串或者是表达式进行处理，当作特殊关键字 -->
  <!-- <h2 a = "1+1" :b = "1+1" c = "x" :d = "x" ref="xyz">测试</h2> -->
  <Person :list = "personList"/>
</template>

<!-- JavaScript标签或者TypeScript标签 -->
<script lang="ts" setup name="App">
  import Person from './compoents/Person.vue'
  import { reactive } from 'vue';
  import { type personArray } from './types';

  let personList = reactive<personArray>([
    {id: "p01", name: "张三", age:18 },
    {id: "p02", name: "李四", age:19 },
    {id: "p03", name: "王五", age:20 },
    {id: "p04", name: "六", age:21 },
    {id: "p05", name: "七", age:22 },
  ])

  // 测试数据
  let x = 9
</script>

<!-- 样式标签 -->
<style scoped>

</style>
