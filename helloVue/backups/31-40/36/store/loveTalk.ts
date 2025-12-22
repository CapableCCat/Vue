import { defineStore } from "pinia";
import axios from "axios";
import { nanoid } from "nanoid";

export const useTalkStore = defineStore("Talk", {
    actions: {
        async getATalk() {
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
            this.talkList.unshift(obj)
        }
    },
    // 真正存储数据的地方
    state() {
        return {
            talkList: [
                { 
                    id: "t01",
                    content: "你今天有点怪，哪里怪？怪好看的。"
                },
                {
                    id: "t02",
                    content: "草莓、蓝莓、蔓越莓，今天想我了没？"
                },
                {
                    id: "t03",
                    content: "心里给你留了一块地，我的死心塌地。"
                },
            ]
        }
    }
})