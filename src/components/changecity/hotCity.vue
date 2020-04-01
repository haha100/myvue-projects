<template>
    <div class="hotcity">
        <p>热门城市:</p>
        <div v-for="(item, index) in hotCity" :key="index">{{ item.name }}</div>
    </div>
</template>

<script>
import api from "@/api/index.js"
export default {
    data() {
        return {
            hotCity: []
        }
    },
    //组件被创建之后获取热门城市数据
    created() {
        api.getHotCity().then(res => {
            this.hotCity = res.data.data;
        })
    }
}
</script>