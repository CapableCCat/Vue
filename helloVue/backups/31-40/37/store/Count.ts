import { defineStore } from "pinia";

// 方案二
interface useCountStore {
    sum: number
    school: string
    address: string
}

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
    },
    getters: {
        // 写法一：函数写法
        // bigSum(state): number { // 方案三
        //     return state.sum * 10
        // },
        // 写法二：this写法
        // bigSum(): number {  // 方案一
        //     // 如果使用this的时候，本质上是不需要传递任何参数的
        //     // 出现报错是因为TypeScript类型推断问题，并非Pinia本身问题
        //     // 问题根源：
        //     // 1. TS并不知道this指向useCountStore的state
        //     // 2. 由此返回类型被推断为any
        //     // 有四个解决方案：
        //     // 1. 给函数添加类型注解
        //     // 2. 完整类型定义
        //     // 3. 使用useCountStore的类型定义
        //     // 4. 箭头函数
        //     // this在这里等同于所属Pinia store存储
        //     console.log(this) 

        //     return this.sum * 10
        // },
        // 写法三：箭头函数
        bigSum: state => state.sum * 10, // 方案四

        upperSchoolAndAddress(): string {
            // 如果想要使用this，那么就不能使用箭头函数，反之亦同
            return this.school.toUpperCase() + "-" + this.address.toUpperCase()
        }
    }
})