<template>
    <ul class = "newsList">
        <li>编号：{{ route.params.id }}</li>
        <li>标题：{{ route.params.title }}</li>
        <li>内容：{{ route.params.content }}</li>
    </ul>
</template>

<script setup lang = "ts">
    import { useRoute } from 'vue-router';

    const route = useRoute()
    
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