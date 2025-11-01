<!-- HTML结构标签 -->
<template>
  <div id="person">
    姓：<input type="text" v-model = "firstName">
    <br>
    名：<input type="text" v-model = "lastName">
    <br>
    <button @click = "changeFullName">点击修改全名为“li-si”</button>
    <br>
    全名：<span>{{ fullName1 }}</span> 
    <br>
    全名：<span>{{ fullName1 }}</span>
    <br>
    全名：<span>{{ fullName1 }}</span> 
    <br>
    全名：<span>{{ fullName1 }}</span>
    <br>
    全名：<span>{{ fullName2() }}</span>
    <br>
    全名：<span>{{ fullName2() }}</span>
    <br>
    全名：<span>{{ fullName2() }}</span>
    <br>
    全名：<span>{{ fullName2() }}</span>
  </div>
</template>

<!-- setup语法糖标签 -->
<script lang="ts" setup>
    import { ref, computed } from 'vue';

    // 数据：
    let firstName = ref("张")
    let lastName = ref("三")

    // 方法：
    // 这样得出的计算属性  结果是只读的
    let fullName1 = computed(() => {
        console.log(1)
        return firstName.value.slice(0, 1).toUpperCase() +  
            firstName.value.slice(1) + "-" + lastName.value
    }) 

    function fullName2() {
        console.log(1)
        return firstName.value.slice(0, 1).toUpperCase() +  
            firstName.value.slice(1) + "-" + lastName.value
    }

    let fullName = computed({
        get() {
            return firstName.value.slice(0, 1).toUpperCase() +  
                firstName.value.slice(1) + "-" + lastName.value
        },
        set(val) {
            const [str1, str2] = val.split("-")
            firstName.value = str1
            lastName.value = str2
        }
    })

    function changeFullName() {
        fullName.value = "li-si"
    }
</script>

<!-- 样式标签 -->
<style scoped>
    input {
        margin: 5px;
    }

    span {
        margin-top: 15px;
    }
</style>
