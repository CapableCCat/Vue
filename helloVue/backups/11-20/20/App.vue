<!-- HTML结构标签 -->
<template>
  <!-- 若其他组件中出现相同id的标签，则根据先后渲染的顺序输出对应内容 -->
  <!-- 所以会占用目的输出，无法完成对应效果 -->
  <!-- <h2 id = "title2">你好</h2> -->
  <!-- <button @click = "showH2Log1">点我输出id包裹着的h2中的元素</button> -->
  <h2 ref="title2">你好</h2>
  <button @click="showH2Log2">点我输出ref包裹着的h2中的元素</button>
  <button @click="showPerson">点我查看Person</button>
  <!-- 如果子组件不主动暴露细节，那么处于隐私保护，返回的数据将保密 -->
  <Person ref="people" />
</template>

<!-- JavaScript标签或者TypeScript标签 -->
<script lang="ts" setup name="App">
import Person from './compoents/Person.vue'
import { ref } from 'vue'

let title2 = ref()
let people = ref()

//方法

// 检测id输出
// function showH2Log1() {
//   console.log(document.getElementById("title2"))
// }

// 检测ref输出
function showH2Log2() {
  console.log(title2.value)
}

function showPerson() {
  console.log(people.value)
}
</script>

<!-- 样式标签 -->
<style scoped>

</style>
