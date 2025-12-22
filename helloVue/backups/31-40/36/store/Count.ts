import { defineStore } from "pinia";

export const useCountStore = defineStore("Count", {
    // actions里面放置的是一个一个的方法，用于响应组件中的“各种动作”
    actions: {
        increment(value: any) {
            console.log("increment被调用", value)

            // 修改数据
            // 其中Vue3确实不推荐使用this关键字
            // 但是这里是Pinia仓库，所以可以适当使用
            // 注意区分Vue3和Pinia
            if( this.sum < 10) {
                this.sum += value
            }
        }
    },
    // 真正存储数据的地方
    state() {
        return {
            sum: 6,
            school: "TSGUAS",
            address: "TianJin"
        }
    }
})