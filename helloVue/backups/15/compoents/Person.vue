<!-- HTML结构标签 -->
<template>
  <div id="person">
    <h1>情况三：监视【reactive】定义的【对象类型】数据</h1>
    <h2>姓名：{{ person.name }}</h2>
    <h2>年龄：{{ person.age }}</h2>
    <button @click = "changeName">修改姓名</button>
    <button @click = "changeAge">修改年龄</button>
    <button @click = "changePerson">修改整个人</button>
    <hr>
    <h2>Test: {{ obj.a.b.c }}</h2>
    <button @click = "test">点我测试</button>
  </div>
</template>

<!-- setup语法糖标签 -->
<script lang="ts" setup>
    import { reactive, watch } from 'vue'

    // 数据
    let person = reactive({
        name: "张三",
        age: 18
    })

    let obj = {
        a: {
            b: {
                c: 666
            }
        }
    }

    // 方法
    function changeName() {
        person.name += "~"
    }

    function changeAge() {
        person.age += 1
    }

    // 【reactive】定义的【对象类型】数据
    // 此处是通过批量修改属性的值来达到替换Person的目的
    // Person内属性的地址值没有发生变化
    // 属性名相同，但是值被覆盖了
    // 区别于 ref
    function changePerson() {
        Object.assign(person, {
            name: "李四", 
            age: 25
        })
    }

    function test() {
        obj.a.b.c = 222
    }

    // 监视
    // 情况三：监视【reactive】定义的【对象类型】数据
    watch(person, (newValue, oldValue) => {
        console.log("person变化了", newValue, oldValue)
    })
    // 默认开启深度监视 ({deep: true})
    // 且无法关闭
    // 又称：隐式创建深层监听
    // 以下为示例：
    watch(obj, (newValue, oldValue) => {
        console.log("obj变化了", newValue, oldValue)
    }, {
        deep: false
    })

</script>

<!-- 样式标签 -->
<style scoped>
    button {
        margin: 5px
    }
</style>
