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
<script>
    export default {
        name: 'Person', // 组件名
        data() {
            return {
                name: '张三',
                age: 18,
                gender: '男',
                tel: '12346678910'
            }
        },
        methods: {
            changeName() {
                this.name = "Zhang-San"
            },
            changeAge() {
                this.age += 1
            },
            showTel() {
                alert(this.tel)
            }
        }
    }
</script>

<!-- 样式标签 -->
<style>
    button {
        margin: 5px
    }
</style>