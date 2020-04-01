<template>
  <div class="city">
      <div class="fenlei" :id="'city-' + key.toUpperCase()" v-for="(value, key) in cityList" :key="value.id">
          <span class="firstChar">{{ key.toUpperCase() }}</span>
          <span class="cityList">
              <span v-for="item in value" :key="item.id" @click="chengeCity(item)">{{ item.name }}</span>
          </span>
      </div>
  </div>
</template>

<script>
import api from "@/api/index.js";
export default {
    data() {
        return {
            cityList: {}
        };
    },
    //获取所有省份下的城市数据
    created() {
        api.getProvince().then((res) => {
            let allCity = [];
            let firstCharObj = {};
            let firstCharArr = [];
            let newFirstCharObj = {};
            //对所有省份数据循环，把所有省份下的城市放到一个allCity数组中
            res.data.data.forEach(function (item, index) {
                allCity = allCity.concat(item.cityInfoList);
            })
            //对allCity循环，将城市按照城市的首字母进行分类，放到firstCharObj对象中
            //firstCharObj = {"s": ["三亚", "苏州"], "a": ["阿克苏", "安吉", "鞍山"]}
            allCity.forEach((item, index) => {
                if(!firstCharObj[item.firstChar]) {
                    firstCharObj[item.firstChar] = [];
                }
                firstCharObj[item.firstChar].push(item);
            })
            //取出firstCharObj对象中的所有key，放入firstCharArr数组中
            for(let key in firstCharObj) {
                firstCharArr.push(key)
            };
            //对firstCharArr排序
            firstCharArr.sort();
            //将firstCharObj按照字母排序，所有城市数据放入新对象newFirstCharObj中
            for(let i in firstCharArr) {
                var itemKey = firstCharArr[i];
                newFirstCharObj[itemKey] = firstCharObj[itemKey];
            }
            this.cityList = newFirstCharObj;
        })
    },
    methods: {
        //点击城市名称，更改store中position(位置)的值,跳转至首页
        chengeCity(item) {
            this.$store.dispatch('setPosition', item);
            this.$router.push({name: "firstpage"});
        }
    }
};
</script>