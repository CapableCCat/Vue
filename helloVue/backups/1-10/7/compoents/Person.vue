<!-- HTML结构标签 -->
<template>
    <div id="person">
        <h2>姓名：{{ name }}</h2>
        <h2>年龄：{{ age }}</h2>
        <h2>性别：{{ gender }}</h2>
        <button @click = "showTel">点我显示电话</button>
        <button @click = "changeName">修改名字</button>
        <button @click = "changeAge">修改年龄</button>
    </div>
</template>

<!-- JavaScript标签或者TypeScript标签 -->
<script lang = "ts">
    export default {
        name: 'Person', // 组件名     
    }
</script>

<!-- setup语法糖标签 -->
<script lang = "ts" setup> 
    import {ref} from 'vue'

    // 数据data
    let name = ref("张三")
    let age = ref(18)
    let gender = "男"
    let tel = 12345678910

    // 方法
    function changeName() {
        name.value = "Zhang-San"
    }
    function changeAge() {
        age.value += 1
    }
    function showTel() { 
        alert(tel)
    }
</script>

<!-- 样式标签 -->
<style scoped>
    button {
        margin: 5px
    }
</style>