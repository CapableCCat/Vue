<!-- HTML结构标签 -->
<template>
    <div class = "app">
        Hello World!
        <Person/>
    </div>
</template>

<!-- JavaScript标签或者TypeScript标签 -->
<script>
import Person from './compoents/Person.vue';

    export default {
        name: "App", // 组件名
        components: {Person} // 注册组件，连接根和结构
    }
</script>

<!-- 样式标签 -->
<style>
    .app {
        background-color: #ddd;
        box-shadow: 0 0 10px;
        border-radius: 5px;
        padding: 10px;
    }
</style>