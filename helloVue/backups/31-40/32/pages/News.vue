<template>
    <div class = "news">
        <!-- 导航区 -->
        <ul>
            <!-- 注意避开new等JavaScript的关键字 -->
            <li v-for = "news in newsList" :key = "news.id">
            <button @click = "showNewsDetail(news)">查看新闻</button>
            <RouterLink
                :to = "{
                    name: 'detail',
                    query: {
                        id: news.id,
                        title: news.title,
                        content: news.content
                    }   
                }"
            >
                {{ news.title }}
            </RouterLink>
            </li>
        </ul>
        <!-- 详情页 -->
        <div class="news-content">
             <RouterView></RouterView>
        </div>
    </div>
</template>

<script setup lang = "ts">
    import router from '@/router';
    import { onMounted } from 'vue';
    import { onUnmounted } from 'vue';
    import { reactive } from 'vue';
    import { RouterView, RouterLink, useRouter } from 'vue-router';

    const newsList = reactive([
        {
            id: "n01",
            title: "很好的抗癌食物",
            content: "西兰花"
        },
        {
            id: "n02",
            title: "如何一夜暴富",
            content: "幻想"
        },
        {
            id: "n03",
            title: "震惊！万万没想到",
            content: "明天是疯狂星期四"
        },
        {
            id: "n04",
            title: "好消息！好消息！",
            content: "快过年了"
        }
    ])

    // 方法
    interface NewsInter {
        id: string,
        title: string,
        content: string
    }
        
    // 方法
    function showNewsDetail(news:NewsInter) {
        router.push({
            name: 'detail',
            query: {
                id: news.id,
                title: news.title,
                content: news.content
            } 
        })
    }

    // 生命周期
    // 挂载完毕
    onMounted(() => {
        console.log("News挂载完毕")
    })

    onUnmounted(() => {
        console.log("News卸载完毕")
    })
</script>

<style scoped>
    .news {
        padding: 0 20px;
        display: flex;
        justify-content: flex-start;
        gap: 20px;
        height: 100%;
    }

    .news ul {
        margin-top: 30px;
        /* list-style: none; */
        padding-left: 10px;
    }

    .news li::marker {
        color: #64967E;
    }

    .news li>a {
        font-size: 18px;
        line-height: 40px;
        text-decoration: none;
        color: #64967E;
        text-shadow: 0 0 1px rgb(0, 84, 0);
    }

    .news-content {
        width: 70%;
        height: 90%;
        border: 1px solid;
        margin-top: 20px;
        border-radius: 10px;
    }
</style>