<template>
    <div class = "count">
        <h2>当前求和为：{{ countStore.sum }}</h2>
        <h2>欢迎来到: {{ countStore.school }}</h2>
        <h2>本校坐落于: {{ countStore.address }}</h2>
        <select v-model.number = "num">
            <option value = "1">1</option>
            <option value = "2">2</option>
            <option value = "3">3</option>
        </select>
        <button @click = "add">加</button>
        <button @click = "minus">减</button>
    </div>
</template>

<script setup lang = "ts">
    import { ref } from 'vue';

    // 引入useCountStore
    import { useCountStore } from '@/store/Count'
    // 使用useCountStore
    // 得到一个专门保存Count相关的Store存储
    const countStore = useCountStore()

    // 数据
    let num = ref(1) // 用户选择的数字

    // 方法
    function add() {
        // 第一种方法
        // countStore.sum += num.value

        // 第二种方法
        // 在VueTool的时间线中显示三次修改
        countStore.sum += 1

        countStore.school = "天津中德应用技术大学"
        countStore.address = "天津市津南区雅深路2号"

        // 第三种方法
        // 在VueTool的时间线中显示一次patch批量变更
        // countStore.$patch({
        //     sum: 888,
        //     school: "天津中德应用技术大学",
        //     address: "天津市津南区雅深路2号"
        // })
        
        // 第四种方法
        // countStore.increment(num.value)
    }

    function minus() {
        countStore.sum -= num.value
    }
</script>

<style scoped>
    .count {
        background-color: skyblue;
        padding: 10px;
        border-radius: 10px;
        box-shadow: 0 0 10px;
    }

    select, button {
        margin: 0 5px;
        height: 25px;
    }
</style>