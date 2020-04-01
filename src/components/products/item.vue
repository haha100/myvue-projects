<template>
    <div class="s-item">
        <div class="item">
            <!-- 产品左边大图区 -->
            <a href="#" class="image">
                <img :src="meta.image" />
            </a>
            <!-- 商家信息展示区 -->
            <div class="introduce">
                <div class="introduce-top">
                    <h3>
                        <router-link to="{name: 'goods'}">{{ meta.title }}</router-link>
                    </h3>
                    <p>
                        <el-rate v-model="meta.score" disabled text-color="#ff9900"></el-rate>
                        <span class="p-span" v-if="meta.score > 4.5">很好</span>
                        <span class="p-span" v-else-if="meta.score > 4">好</span>
                        <span class="p-span" v-else-if="meta.score > 3.5">不错</span>
                        <span class="p-span" v-else-if="meta.score > 3">一般</span>
                        <span class="p-span">{{ meta.score }}分</span>
                        <span class="p-span highlight">{{ meta.commentNum }}人评论</span>
                    </p>
                    <p>
                        
                        <span class="cate-info ellipsis">
                            <span v-for="(i, n) in meta.tab" :key="n">
                                {{ i }}
                                <span>{{ shu(n, meta.tab.length) ? '|' : '' }}</span>
                            </span>
                        </span>
                        <span class="cate-info address">{{ meta.address }}</span>
                        <span class="cate-info map">
                            <a href="#">
                                <i class="el-icon-location-information"></i>
                                查看地图
                            </a>
                        </span>
                    </p>
                    <p class="introduce-price">
                        人均￥
                        <span>{{ meta.avgPrice }}</span>
                    </p>
                </div>
                <div class="discount-wrap">
                    <div class="discount" v-for="(a, b) in meta.dealItems.slice(0,2)" :key="b">
                        <h3>
                            <span>{{ a.title }}</span>
                        </h3>
                        <p>
                            <span class="discount-price">￥{{ a.price }}</span>
                            <span class="countPrice">门市价￥{{ a.counterPrice }}</span>
                            <span class="saled'">已售{{ a.saleNum }}</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ["meta"],
    methods: {
        //如果不止一个标签，在每个标签中间添加一个竖线
        shu: function (n, m) {
            return n < m - 1;
        }
    }
}
</script>