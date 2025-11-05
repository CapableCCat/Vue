<!-- HTML结构标签 -->
<template> 
  <div id="person">
    <h2>当前求和为：{{ sum }}，扩大十倍后：{{ expandSum }}</h2>
    <button @click = "add">点我Sum+1</button>
    <hr>
    <img v-for = "(dog, index) in dogList" :src = "dog" :key = "index">
    <br>
    <button @click = "getDog">再来一只狗狗</button>
  </div>
</template>

<!-- setup语法糖标签 -->
<script lang="ts" setup>
    import useSum from '@/hooks/useSum';
    import useDog from '@/hooks/useDog';

    const { sum, add, expandSum } = useSum()
    const { dogList, getDog } = useDog()
</script>

<!-- 样式标签 -->
<style scoped>
    button {
        margin: 5px;
    }

    img {
        width: 100px;
    }
</style>
