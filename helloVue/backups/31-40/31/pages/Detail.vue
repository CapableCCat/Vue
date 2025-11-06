<template>
    <ul class = "newsList">
        <li>编号：{{ id }}</li>
        <li>标题：{{ title }}</li>
        <li>内容：{{ content }}</li>
    </ul>
</template>

<script setup lang = "ts">
    defineProps(["id", "title", "content"])
</script>

<style scoped>
    .newsList {
        list-style: none;
        padding-left: 20px;
    }

    .newsList>li {
        line-height: 30px;
    }
</style>