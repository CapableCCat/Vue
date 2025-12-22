<template>
    <div class = "talk">
        <button @click = "getLoveTalk">获取一句土味情话</button>
        <ul>
            <li v-for = "talk in talkList" :key = "talk.id">
                {{ talk.content }}
            </li>
        </ul>
    </div>
</template>

<script setup lang = "ts">
    import { useTalkStore } from '@/store/loveTalk'
    import { storeToRefs } from 'pinia'

    const loveTalkStore = useTalkStore() 

    const { talkList } = storeToRefs(loveTalkStore)

    // 方法
    function getLoveTalk() {
        loveTalkStore.getATalk()
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