<!-- HTML结构标签 -->
<template>
  <Person v-if = "isShow"/>
</template>

<!-- JavaScript标签或者TypeScript标签 -->
<script lang="ts" setup name="App">
  import Person from './compoents/Person.vue';
  import { ref } from 'vue';
  import { onMounted } from 'vue';

  let isShow = ref(true)

  // 父组件的生命周期
  onMounted(() => {
    console.log("父组件挂载完毕")
  }) 

</script>

<!-- 样式标签 -->
<style scoped>

</style>
