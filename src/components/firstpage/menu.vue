<template>
    <div class="mymenu">
        <div class="all-kind">全部分类</div>
        <!-- 分类菜单区域 -->
        <ul class="menu-ul" @mouseleave="menuMouseleave">
            <li v-for="(item, index) in menuList" :key="index + '-' + item" @mouseenter="menuMouseenter(item)">
                <i class="tubiao" :class="item.myClass" />
                <a href="#">{{ item.title}}</a>
                <i class="el-icon-arrow-right" />
            </li>
        </ul>
        <!-- 鼠标悬放在菜单栏显示具体分类区域 -->
        <div v-if="moreList" class="more-shows" @mouseenter="moreMouseenter" @mouseleave="moreMouseleave">
            <template v-for="(item, index) in moreList.children">
                <div class="title-wrap" :key="index + '-' + item">
                    <div class="title">
                        <a href="#">{{ item.title }}</a>
                    </div>
                    <a href="#" class="more">
                        更多
                        <i class="el-icon-d-arrow-right"></i>
                    </a>
                </div>
                <ul class="more-menu" :key="index">
                    <li v-for="(v, i) in item.list" :key="i + '-' + v">
                        <a href="#">{{ v }}</a>
                    </li>
                </ul>
            </template>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            moreList: null,
            menuList: [{
                myClass: "el-icon-fork-spoon",
                title: "美食",
                children: [{
                    title: "美食",
                    list: ["代金券", "甜点饮品", "火锅自助餐", "小吃快餐", "日韩料理", "西餐", "聚餐宴请", "烧烤烤肉", "东北菜", "川湘菜", "江浙菜", "香锅烤鱼", "粤港菜", "中式烧烤/烤串", "西北菜", "咖啡酒吧茶馆", "云贵菜", "东南亚菜", "海鲜", "素食", "台湾/客家菜", "创意菜", "汤/粥/炖菜", "蒙餐", "新疆菜", "其他美食", "京菜鲁菜"]
                }]
            },{
                myClass: "mtwmlogo",
                title: "外卖",
                children: [{
                    title: "外卖",
                    list: ["美团外卖"]
                }]
            },{
                myClass: "hotel",
                title: "酒店",
                children: [{
                    title: "酒店星级",
                    list: ["经济型", "舒适/三星", "高档/四星", "豪华/五星"]
                }]
            },{
                myClass: "minsu",
                title: "榛果民宿",
                children: [{
                    title: "热门城市",
                    list: ["上海", "成都", "北京", "重庆", "南京", "杭州", "广州", "西安", "武汉", "厦门", "长沙", "青岛", "深圳", "天津", "苏州"]
                },{
                    title: "热门房源",
                    list: ["复式Loft", "别墅"]
                }]
            },{
                myClass: "mao",
                title: "猫眼电影",
                children: [{
                    title: "热映电影",
                    list: ["罗小黑战", "记速度与激情：特别行动", "诛仙Ⅰ", "小小的愿望", "攀登者", "名侦探柯南：绀青之拳", "哪吒之魔童降世", "中国机长", "徒手攀岩", "我和我的祖国"]
                },{
                    title: "热门影院",
                    list: ["万达影城", "中影国际影城", "横店电影城", "大地影院", "金逸影城", "星美国际影城", "SFC上影影城", "比高电影城", "保利国际影城", "CGV影城"]
                }]
            },{
                myClass: "ticket",
                title: "机票 / 火车票",
                children: [{
                    title: "机票",
                    list: ["国内机票", "国际/港澳台机票"]
                },{
                    title: "火车票",
                    list: ["火车票"]
                }]
            },{
                myClass: "pleasure",
                title: "休闲娱乐 / KTV",
                children: [{
                    title: "休闲娱乐",
                    list: ["足疗按摩", "洗浴/汗蒸", "酒吧", "密室逃脱", "轰趴馆", "茶馆", "私人影院", "DIY手工坊", "采摘/农家乐", "网吧网咖", "游乐游艺", "VR", "桌面游戏", "真人CS", "棋牌室", "其他玩乐"]
                },{
                    title: "KTV",
                    list: ["KTV"]
                }]
            },{
                myClass: "life-service",
                title: "生活服务",
                children: [{
                    title: "生活服务",
                    list: ["衣物/皮具", "洗护家政", "搬家运输", "送水", "充值缴费", "服饰/鞋包养护", "开锁换锁", "居家维修", "管道疏通", "家电维修清洗", "电脑维修", "手机维修", "证件照/肖像摄影", "照片冲印/图文文印", "商务服务/法律服务", "文化传媒机构", "成人用品/情趣用品"]
                }]
            },{
                myClass: "hear",
                title: "丽人 / 美发 / 医院美容",
                children: [{
                    title: "丽人",
                    list: ["美发", "美甲美睫", "美容美体", "医学美容", "瑜伽舞蹈", "瘦身纤体", "韩式定妆", "祛痘", "纹身", "化妆品", "养发"]
                }]
            },{
                myClass: "marry",
                title: "结婚 / 婚纱摄影 / 婚宴",
                children: [{
                    title: "结婚",
                    list: ["婚纱摄影", "旅拍", "个性写真", "婚宴", "婚庆公司", "婚纱礼服", "西服定制", "婚戒首饰", "婚车租赁", "司仪主持", "彩妆造型", "婚礼跟拍", "婚礼小礼品", "更多婚礼服务"]
                }]
            },{
                myClass: "child",
                title: "亲子 / 儿童乐园 / 幼教",
                children: [{
                    title: "儿童乐园",
                    list: ["婴儿游泳", "其它亲子游乐"]
                },{
                    title: "幼儿教育",
                    list: ["早教中心", "少儿英语", "智力开发", "托班/幼儿园", "幼儿教育", "其他幼儿教育"]
                },{
                    title: "亲子摄影",
                    list: ["儿童摄影", "孕妇写真", "上门拍", "其他亲子摄影"]
                },{
                    title: "孕妇护理",
                    list: ["月子会所", "产后恢复", "妇幼医院", "孕产用品", "开奶催乳", "月嫂", "亲子购物", "宝宝派对", "亲子服务"]
                }]
            },{
                myClass: "exercise",
                title: "运动健身 / 健身中心",
                children: [{
                    title: "运动健身",
                    list: ["健身中心", "武术场馆", "游泳馆", "羽毛球馆", "溜冰场", "射箭馆", "篮球场", "网球馆", "台球馆", "乒乓球", "足球场", "高尔夫场", "保龄球馆", "体育场馆", "马术场", "壁球馆", "更多运动"]
                }]
            },{
                myClass: "family",
                title: "家装 / 建材 / 家居",
                children: [{
                    title: "装修设计",
                    list: ["半包装修", "全包装修", "清包装修"]
                },{
                    title: "家装建材",
                    list: ["地板", "瓷砖石材", "橱柜", "灯饰照明", "厨卫洁具", "油漆涂料", "集成吊顶", "墙纸墙艺", "门窗", "木材板材", "家用五金", "电工电料", "楼梯", "管材管件"]
                },{
                    title: "家具家居",
                    list: ["家具", "床上用品/家纺", "家居饰品", "厨具餐具", "智能家居"]
                },{
                    title: "家装卖场",
                    list: ["建材卖场", "家居卖场", "灯饰卖场"]
                }]
            },{
                myClass: "study",
                title: "学习培训 / 音乐培训",
                children: [{
                    title: "音乐培训",
                    list: ["钢琴", "吉他", "小提琴", "古筝", "架子鼓", "声乐", "其他音乐培训"]
                },{
                    title: "职业技术",
                    list: ["美容化妆", "会计", "IT", "厨艺", "管理培训", "摄影培训", "司法考试", "公务员培训", "其他职业培训"]
                },{
                    title: "外语培训",
                    list: ["英语", "日语", "韩语", "法语", "德语", "汉语", "俄语", "西班牙语", "其他外语"]
                },{
                    title: "美术培训",
                    list: ["绘画", "书法", "其他美术"]
                }]
            },{
                myClass: "hospital",
                title: "医疗健康 / 宠物 / 爱车",
                children: [{
                    title: "医疗健康",
                    list: ["医院", "齿科口腔", "体检中心", "药店", "中医", "其他健康服务"]
                },{
                    title: "爱车",
                    list: ["洗车", "租车", "加油站", "维修保养", "驾校", "汽车美容", "陪练", "汽车用品", "停车场", "汽车保险", "4S店/汽车销售", "更多汽车服务", "机油保养", "汽车报价", "二手车", "广告驾校", "交警队", "汽车改装", "汽车配件"]
                },{
                    title: "宠物",
                    list: ["宠物店", "宠物医院"]
                }]
            },{
                myClass: "beer",
                title: "酒吧 / 密室逃脱",
                children: [{
                    title: "玩乐",
                    list: ["KTV", "酒吧", "密室逃脱", "游乐游艺", "网吧网咖", "私人影院", "DIY手工坊", "桌面游戏", "采摘/农家乐", "棋牌室", "轰趴馆", "真人CS", "VR", "其他玩乐"]
                }]
            }]
        }
    },
    methods: {
        //鼠标悬放在菜单上，设mroeList值为menuList在循环时的item
        menuMouseenter(item) {
            this.moreList = item;
        },
        //鼠标离开单个菜单项，设置moreList的值为null，并让具体分类区域隐藏
        menuMouseleave() {
            let self = this;
            this.timer = setTimeout(function() {
                self.moreList = null;
            }, 200)
        },
        moreMouseenter() {
            clearTimeout(this.timer)
        },
        moreMouseleave() {
            this.moreList = null;
        }
    }
};
</script>