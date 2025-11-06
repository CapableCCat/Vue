<!-- HTML结构标签 -->
<template>
  <div id="person">
    <ul>
        <li v-for="p in list" :key = "p.id">
            {{ p.name }} -- {{ p.age }}
        </li>
    </ul>
  </div>
</template>

<!-- setup语法糖标签 -->
<script lang="ts" setup>
    import { defineProps, withDefaults } from 'vue';
    import { type personArray } from '@/types';

    // 接收a和b
    // 同时将props保存起来
    // let x = defineProps(["a", "b"])
    // // 完全输出
    // console.log(x)
    // // 部分输出
    // console.log(x.a)

    // 接收a和list
    // let x = defineProps(["a", "list"])

    // 只接收list
    // 此时如果没有加以限制的话，如果在来自根组件出现了错误输入，则会出现问题和报错
    // defineProps(["list"])

    // 接收list + 限制类型
    // defineProps<{list:personArray}>()

    // 接收list + 限制类型 + 限制必要性 + 指定默认值
    // 接收list和限制类型略
    // 限制必要性 (list?) 中的 ?：代表根组件或者目标组件不强制要求传递参数
    // 指定默认值 withDefaults：在根组件或者目标组件没有传递参数时拥有一个符合格式的默认值
    withDefaults(defineProps<{list?:personArray}>(), {
        list: () => [{
            id: "p01",
            name: "康师傅·特仑苏",
            age: 19
        }]
    })
</script>

<!-- 样式标签 -->
<style scoped>
    button {
        margin: 5px;
    }
</style>
