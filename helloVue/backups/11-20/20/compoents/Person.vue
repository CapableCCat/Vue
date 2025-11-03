<!-- HTML结构标签 -->
<template>
  <div id="person">
    <h1>中国</h1>
    <!-- 如果跟组件出现同名id包裹的标签，会出现异常 -->
    <!-- <h2 id = "title2">天津1</h2> -->

    <!-- 使用ref包裹标签，就算根组件出现相同名称，也会进行隔离 -->
    <!-- 推荐使用ref，有类似局部变量的效果 -->
    <h2 ref = "title2">天津2</h2>
    <h3>开源鸿蒙社</h3>

    <!-- <button @click = "showH2Log1">点我输出id包裹着的h2中的元素</button> -->
    <button @click = "showH2Log2">点我输出ref包裹着的h2中的元素</button>
  </div>
</template>

<!-- setup语法糖标签 -->
<script lang="ts" setup>
    import { ref, defineExpose } from 'vue';

    // 创建
    // 名为title2，用于存储ref标记内容
    let title2 = ref()

    // 测试数据

    // 如果采用ref包裹组件，那么也是可以读取到子组件实例的
    // 但是为了保护数据隐私，我们无法查询到子组件的细节
    // 除了子组件允许（采用defineExpose主动暴露），这样才能查询到相关细节
    // 而且这些细节是指定的，可以选择完全暴露和指定暴露
    let a = ref(0)
    let b = ref(1)
    let c = ref(2)

    // 方法

    // 同上，如果根组件出现同名id包裹着的标签，会出现异常
    // function showH2Log1() {
    //     console.log(document.getElementById("title2"))
    // }

    // 同上，无论根组件是否出现相同名称，都会针对当前组件进行处理
    // 不会出现先渲染先输出，占用目的输出的情况
    function showH2Log2() {
        console.log(title2.value)
    }

    // 子组件使用defineExpose主动暴露所有细节
    defineExpose({ a, b, c })
    // 子组件使用defineExpose主动暴露部分细节
    // defineExpose({ a, b })
</script>

<!-- 样式标签 -->
<style scoped>
    button {
        margin: 5px;
    }

    /* 返回的输出中，标签部分出现类似data-v-3437f68a的标识 */
    /* 是因为使用了scoped标记，可以理解为局部样式 */
    /* 同样是为了防止因为名称或等的重名行为导致问题和错误 */
    /* 故采用哈希值来区分对应的组件 */
</style>
