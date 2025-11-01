<!-- HTML结构标签 -->
<template>
  <Person/>
</template>

<!-- JavaScript标签或者TypeScript标签 -->
<script lang = "ts">
import Person from './compoents/Person.vue'

export default {
  name: 'App', // 组件名
  components: { Person }, // 注册组件，连接根和结构
}
</script>

<!-- 样式标签 -->
<style scoped>

</style>
