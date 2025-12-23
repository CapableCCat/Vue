<template>
    <div class = "talk">
        <button @click = "getLoveTalk">获取一句土味情话</button>
        <ul>
            <li v-for = "talk in talkList" :key = "talk.id">
                {{ talk.content }}
            </li>
        </ul>
    </div>
    <br>
    <h2>社团名称：{{ Club }}</h2>
    <button @click = "changeName">更换名称</button>
</template>

<script setup lang = "ts">
    import { useTalkStore } from '@/store/loveTalk'
    import { storeToRefs } from 'pinia'
    import { ref } from 'vue'

    const loveTalkStore = useTalkStore() 

    const { talkList } = storeToRefs(loveTalkStore)

    // 数据
    let Club = ref('TSGU-OSC')

    // 方法
    function getLoveTalk() {
        loveTalkStore.getATalk()
    }

    function changeName() {
        Club.value = 'TSGU-OSC'
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