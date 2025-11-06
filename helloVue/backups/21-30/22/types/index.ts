// 定义一个接口，用于限制person对象的具体数据结构属性
// 目的是为了在拼写错误或者数据结构不符时及时提示
// export: 分别暴露
export interface personInter {
    id: string,
    name: string,
    age: number
}

// 暴露一共有三种方法：默认暴露，分别暴露，统一暴露

// 一个自定义类型
export type personArray = Array<personInter>
// 以下方法更简洁
// export type personArray = personInter[]