import { defineStore } from "pinia";

export const useTalkStore = defineStore("Talk", {
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