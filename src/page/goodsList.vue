<template>
    <div class="products">
        <!-- 美团位置和所有结果产品标题区 -->
        <el-row class="crumb">
            <crumbs />
        </el-row>
        <!-- 产品展示和猜你喜欢区域 -->
        <el-row class="productsList">
            <el-col class="list-wrapper">
                <!-- 分类和区域列表 -->
                <categroy />
                <!-- 商家产品展示 -->
                <my-list />
            </el-col>
            <!-- 地图区 -->
            <el-col class="map-wrapper">
                <a href="#" class="map">
                    <img src="../assets/image/map.png" />
                </a>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import Crumbs from "../components/products/crumbs.vue";
import Categroy from "../components/products/categroy.vue";
import MyList from "../components/products/list.vue";
export default {
    components: {
        Crumbs,
        Categroy,
        MyList
    }
}
</script>

<style lang="less">
    @import "../assets/styles/products/goodsList.less";
</style>