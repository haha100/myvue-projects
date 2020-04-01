<template>
    <div class="m-product-list">
        <!-- 排序菜单栏 -->
        <ul class="nav">
            <li v-for="item in nav" v-bind:key="item.key">
                <a href="#">
                    {{ item.name }}
                    <i :class="{'el-icon-d-caret': item.key=='s-price'}"></i>
                </a>
            </li>
        </ul>
        <!-- 商家产品展示区 -->
        <item v-for="(item, index) in productList" :key="index" :meta="item"></item>
    </div>
</template>

<script>
import item from "./item.vue";
import api from "@/api/index.js";
export default {
    data() {
        return {
            nav: [{
                key: "s-default",
                name: "智能排序",
                active: true
            }, {
            key: "s-price",
            name: "价格排序",
            active: false
            }, {
            key: "s-score",
            name: "人气最高",
            active: false
            }, {
            key: "s-appraise",
            name: "评价最高",
            active: false
            }],
            productList: []
        };
    },
    created() {
        //获取产品展示列表数据
        api.getGoodsList().then( res => {
            this.productList = res.data.data
        })
    },
    components: {
        item
    }
};
</script>