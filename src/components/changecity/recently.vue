<template>
    <div class="recently">
        <p>最近访问:</p>
        <div v-for="(item, index) in recentlyList" :key="index">{{ item.name }}</div>
    </div>
</template>

<script>
import api from "@/api/index.js";
export default {
    data() {
        return {
            recentlyList: []
        }
    },
    //获取最近访问城市数据
    created() {
        api.getRecent().then(res => {
            this.recentlyList = res.data.data;
        })
    }
}
</script>