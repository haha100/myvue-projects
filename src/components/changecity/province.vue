<template>
    <div class="choose-province">
        <div class="choose">
            <p>按省份选择:</p>
            <!-- 省份和城市选择框 -->
            <div class="province">
                <div class="province-choose adress" @click="showProvinceList" v-document-click="documentClickProvince">{{ provinceText }}</div>
                <i class="el-icon-caret-bottom"></i>
                <div :class="{'provinceList': true, 'active': showProvince}">
                    <p>省份</p>
                    <div class="list-wrap">
                        <div class="list" v-for="(item, index) in newProvinceList" :key="index">
                            <span v-for="(i, n) in item" :key="i + ' ' + n" @click="chooseProvince(i)">{{ i.provinceName }}</span>
                        </div>
                    </div>
                </div>
                <div class="city">
                    <div class="city-choose adress" :class="{'mycursor': cursor}" @click="showCityList" v-document-click="documentClickCity">{{ cityText }}</div>
                    <i class="el-icon-caret-bottom"></i>
                    <div :class="{'cityList': true, 'active': showCity}">
                        <p>城市</p>
                        <div class="list-wrap">
                            <div class="list" v-for="(item, index) in newCityList" :key="index">
                                <span v-for="(i, n) in item" :key="i + ' ' + n" @click="chooseCity(i)">{{ i.name }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 城市搜索框 -->
        <div class="search">
            <span>直接搜索:</span>
            <el-select
                v-model="value"
                filterable
                remote
                reserve-keyword
                placeholder="请输入城市中文或拼音"
                :remote-method="remoteMethod"
                :loading="loading">
                <el-option v-for="(item, index) in options" :key="index + ' ' + item" :label="item" :value="item"></el-option>
            </el-select>
        </div>
    </div>
</template>

<script>
import api from "@/api/index.js";
export default {
    data() {
        return {
            provinceList: [],
            cityList: [],
            provinceText: '省份',
            cityText: "城市",
            showProvince: false,
            showCity: false,
            cursor: false,
            loading: false,
            value: "",
            options: []
        }
    },
    created() {
        //获取所有省份和省份下的城市数据
        api.getProvince().then(res => {
            this.provinceList = res.data.data;
        })
    },
    methods: {
        //城市搜索
        remoteMethod(demo) {
            console.log(demo);
            //获取所有省份及省份下的城市
            api.getProvince().then((res) => {
                let allCityList = [];
                let selectedCityList = [];
                //将所有城市名称push入arr1数组中
                res.data.data.forEach(function (value, index) {
                    value.cityInfoList.forEach(function (v, i) {
                        allCityList.push(v);
                    })
                    return allCityList;
                })
                //如果选择框输入的值长度为1
                //如果匹配城市拼音的首字母,将该城市名称push到selectedCityList数组中
                if(demo.length == 1) {
                    allCityList.forEach((value, index) => {
                        if(demo == value.firstChar.toLowerCase()) {
                            selectedCityList.push(value.name);
                        }
                        return selectedCityList;
                    })
                    console.log(selectedCityList);
                    this.options = selectedCityList;
                }
                //如果选择框输入的值长度大于1
                //如果匹配value.acronym或者value.pinyin,将该城市名称push到selectedCityList数组中并返回
                if(demo.length > 1) {
                    allCityList.forEach((value, index) => {
                        if(value.acronym.slice(0, demo.length) == demo || value.pinyin.slice(0, demo.length) == demo) {
                            selectedCityList.push(value.name);
                            console.log(selectedCityList);
                        }
                        return selectedCityList;
                    })
                    console.log(selectedCityList);
                    this.options = selectedCityList;
                }
            })
        },
        //点击document让省份选择框隐藏
        documentClickProvince() {
            this.showProvince = false;
        },
        //点击document让城市选择框隐藏
        documentClickCity() {
            this.showCity = false;
        },
        /*
        ** 点击省份名称并选择该省份
        ** 选择完成更改showProvince值，隐藏省份选择框
        ** 更改cursor值，让城市选择框可用
        */
        chooseProvince(i) {
            this.provinceText = i.provinceName;
            this.cityList = i.cityInfoList;
            this.showProvince = false;
            this.cursor = true;

        },
        /*
        ** 点击城市名称并选择该城市
        ** 更改store中position(位置)的值
        ** 选择完成切换到首页
        */
        chooseCity(i) {
            this.cityText = i.name;
            this.showCity = false;
            this.$store.dispatch("setPosition", i);
            this.$router.push({name: 'firstpage'});
        },
        //显示省份列表，隐藏城市列表
        showProvinceList(e) {
            e.stopPropagation();
            this.showProvince = true;
            this.showCity = false;
        },
        //隐藏省份列表，如果已选择省份显示城市列表
        showCityList(e) {
            e.stopPropagation();
            this.showProvince = false;
            if(this.provinceText != '省份') {
                this.showCity = true;
            }
        }
    },
    computed: {
        /*
        ** 对所有省份按列排版，12行为一列
        ** 对provinceList数组进行切割，每次切割的长度为12,返回的数字push到arr中
        ** arr是一个大数组，里面包含若干个小数组
        */
        newProvinceList() {
            let num = Math.ceil(this.provinceList.length / 12);
            let arr = [];
            for(let i = 0; i < num; i++) {
                arr.push(this.provinceList.slice(i * 12, i * 12 + 12))
            }
            return arr;
        },
        /*
        ** 对所有城市按列排版，12行为一列
        ** 对cityList数组进行切割，每次切割的长度为12,返回的数字push到arr中
        ** arr是一个大数组，里面包含若干个小数组
        */
        newCityList() {
            let num = Math.ceil(this.cityList.length / 12);
            let arr = [];
            for(let i = 0; i < num; i++) {
                arr.push(this.cityList.slice(i * 12, i * 12 + 12))
            }
            return arr;
        }
    }
}
</script>

<style scoped>

</style>