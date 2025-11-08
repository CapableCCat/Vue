<template>
    <div class = "talk">
        <button @click = "getLoveTalk">获取一句土味情话</button>
        <ul>
            <li v-for = "talk in loveTalkStore.talkList" :key = "talk.id">
                {{ talk.content }}
            </li>
        </ul>
    </div>
</template>

<script setup lang = "ts">
    import { reactive, ref } from 'vue';
    import axios from 'axios';
    import { nanoid } from 'nanoid';
    import { useTalkStore } from '@/store/loveTalk'

    const loveTalkStore = useTalkStore() 

    // 测试
    // let obj = reactive({
    //     a: 1,
    //     b: 2,
    //     c: ref(3)
    // }) 
    // let x = ref(9)
    // console.log(obj.a)
    // console.log(obj.b)
    // console.log(obj.c)

    // console.log(x)
    // console.log(x.value)


    // 方法
    async function getLoveTalk() {
        // 发请求
        // let result = await axios.get("http://api.umog.com/api/rand.qinghua?format=json")
        // 下行这行的写法是：连续解构赋值 + 重命名
        let { data: { content: content }} = await axios.get("http://api.umog.com/api/rand.qinghua?format=json")

        // 把请求回来的字符串，包装成一个对象
        let obj = {
            id: nanoid(),
            content
        }
        // 放到数组中
        loveTalkStore.talkList.unshift(obj)
    }
</script>

<style scoped>
    .talk {
        background-color: orange;
        padding: 10px;
        border-radius: 10px;
        box-shadow: 0 0 10px;
    }
</style>