import axios from "@/axios.js";
//所有需要请求的api
var api = {
    //最近热门搜索
    getSearchHotWord() {
        return axios.get("/api/meituan/header/searchHotWords.json")
    },
    //搜索框列表数据获取
    getSearchList() {
        return axios.get("/api/meituan/header/search.json")
    },
    //首页下方数据(有格调及其下方数据)
    getResultsByKeyword() {
        return axios.get("/api/meituan/index/resultsByKeywords.json")
    },
    //产品展示页面数据
    getGoodsList() {
        return axios.get("/api/meituan/list/goodsList.json")
    },
    //产品列表页分类列表数据获取
    getClassify() {
        return axios.get("/api/meituan/list/classify.json")
    },
    //产品列表页区域列表数据获取
    getAreaList() {
        return axios.get("/api/meituan/list/areaList.json")
    },
    //热门城市数据获取
    getHotCity() {
        return axios.get("/api/meituan/city/hot.json")
    },
    //最近搜索城市数据获取
    getRecent() {
        return axios.get("/api/meituan/city/recents.json")
    },
    //获取省份列表
    getProvince() {
        return axios.get("/api/meituan/city/province.json")
    },
    //获取当前位置信息
    getPosition() {
        return axios.get("/api/meituan/city/getPosition.json")
    },
    //获取城市列表接口
    getCityList() {
        return axios.get("/api/meituan/city/cityList.json")
    },
    //用户登录接口
    login(params) {
        return axios.get("/api/meituan/login", params)
    },
    //用户注册接口
    register(params) {
        return axios.get("/api/meituan/register", params)
    }
}

export default api;