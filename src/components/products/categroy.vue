<template>
    <div class="menu-products">
        <div class="menu">
            <!-- 分类菜单栏 -->
            <div class="kind wrapper">
                <div class="labal">
                    <span class="title">分类</span>
                    <span class="all">全部</span>
                </div>
                <div class="tag-group">
                    <div class="tag" v-for="(item, index) in kindList" :key="index">
                        <div class="tag-expend">
                            <span>{{ item.title }}</span>
                            <i class="el-icon-caret-bottom"></i>
                        </div>
                        <div class="content">
                            <dl>
                                <div class="arrow"></div>
                                <dt>{{ item.title }}</dt>
                                <dd v-for="i in item.subList" :key="i.id">{{ i.name }}</dd>
                            </dl>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 区域菜单栏 -->
            <div class="area wrapper">
                <div class="labal">
                    <span class="title">区域</span>
                    <span class="all">全部</span>
                </div>
                <div class="tag-group area-group">
                    <div class="tag" v-for="(item, index) in areaList" :key="index">
                        <div class="tag-expend">
                            <span>{{ item.title }}</span>
                            <i class="el-icon-caret-bottom"></i>
                        </div>
                        <div class="content">
                            <dl>
                                <div class="arrow"></div>
                                <dt>{{ item.title }}</dt>
                                <dd v-for="i in item.subList" :key="i.id">{{ i.name }}</dd>
                            </dl>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="productsList">

        </div>
    </div>
</template>

<script>
import api from "@/api/index.js";
export default {
    data() {
        return {
            kindList: [],
            areaList: [{
                "title": "美食",
                "type": "food",
                "subList": [{
                    "name": "日本菜",
                    "id": "Japan"
                }]
            },{
                "title": "酒店住宿",
                "type": "hotal",
                "subList": [{
                    "name": "温泉酒店",
                    "id": "hot_spring"
                }]
            }]
        }
    },
    created() {
        //分类列表数据获取
        api.getClassify().then(res => {
            this.kindList = res.data.data;
        })
    }
}
</script>

<style>

</style>