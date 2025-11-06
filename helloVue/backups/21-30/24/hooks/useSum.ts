import { ref, computed } from 'vue';
import { onMounted } from 'vue';

export default function() {
    // 数据
    let sum = ref(0)
    let expandSum = computed(() => {
        return sum.value * 10
    })
    
    // 方法
    function add() {
        sum.value += 1
    } 

    // 生命周期
    onMounted(() => {
        add()
    })

    // 提交至外部
    return {
        sum,
        add,
        expandSum
    }
}
