<template>
    <div class="dailybox">
        <!-- 年月日 -->
        <div class="year-month-day">
            <div class="beforeday" @click="beforeMonth"></div>
            <div class="dailyshow">{{ year }} 年 {{ month }} 月 {{ day }}</div>
            <div class="afterday" @click="nextMonth"></div>
        </div>
        <!-- 周和具体日期 -->
        <div class="week-day">
            <div class="week-box">
                <div v-for="item in ['日', '一', '二', '三', '四', '五', '六']" :key="item" class='week'>{{ item }}</div>
            </div>
            <div class="everyday">
                <!-- item-beginDay 让日期与星期准确对应-->
                <!-- 
                    原本这42个方格是从1排到42，通过对item的计算让着42个方格来显示上个月，当前月，下个月的日期
                    先判断本月份的第一天星期几
                    然后第一天之前的方格显示上个月的日期
                    本月份的最后一天之后的方格显示下个月的日期
                -->
                <div v-for='item in 42' :key='item' class='day'>
                    <!-- 展示上个月份的日期 -->
                    <!-- item-beginDay-allDay 计算得出的结果是上个月要展示在方格的日期-->
                    <div class="other-day" v-if="item - beginDay <= 0">{{ item - beginDay + allDay}}</div>
                    <!-- 展示当前月份的日期 -->
                    <!-- 通过item-beginDay，使得本月的第一天与相应的星期对应起来-->
                    <div 
                        v-else-if="item - beginDay > 0 && item -beginDay < allDay + 1"
                        :class="{'now-day': `${year}-${month}-${item-beginDay}` === currentDay,
                            'active-day': `${year}-${month}-${item-beginDay}` === `${year}-${month}-${day}`
                        }"
                        @click="handleChooseDay(item-beginDay)"
                    >
                        {{ item - beginDay }}
                    </div>
                    <!-- 展示下个月份的日期 -->
                    <!-- item-allDay-1 计算出的结果是下个月要展示在方格的日期 -->
                    <div class="other-day" v-else>{{ item - allDay - 1}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            year: null,
            month: null,
            day: null,
            currentDay: null
        }
    },
    created () {
        //渲染当前日期
        this.getCurrentTime();
    },
    methods: {
        //获取当前日期
        getCurrentTime() {
            const date = new Date();
            this.year = date.getFullYear();
            this.month = date.getMonth() + 1;
            this.day = date.getDate();
            this.currentDay = `${this.year}-${this.month}-${this.day}`
        },
        handleChooseDay(day) {
            this.day = day;
        },
        beforeMonth() {
            if(this.month === 1) {
                this.year -= 1;
                this.month = 12;
            }else {
                this.month -= 1;
            }
            this.computedDay();
        },
        nextMonth() {
            if(this.month == 12) {
                this.year += 1;
                this.month = 1;
            }else {
                this.month += 1;
            }
            this.computedDay();
        },
        computedDay() {
            const allDay = new Date(this.year, this.month, 0).getDate();
            if(this.day > allDay) {
                this.day = allDay;
            }
        }
    },
    computed: {
        //计算每个月的第一天星期几
        beginDay () {
            return new Date(this.year, this.month - 1, 1).getDay();
        },
        //计算每个月的总天数
        allDay () {
            return new Date(this.year, this.month, 0).getDate();
        }
    }
}
</script>

<style>
    .dailybox {
        width: 280px;
        margin-left: 100px;
    }
    .dailybox .year-month-day {
        width: 280px;
        box-sizing: border-box;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 0px 5px;
        margin: 5px 0px;
    }
    .dailybox .year-month-day .beforeday {
        border: 10px solid transparent;
        border-right-color: #3385ff;
        cursor: pointer;
    }
    .dailybox .year-month-day .afterday {
        border: 10px solid transparent;
        border-left-color: #3385ff;
    }
    .dailybox .year-month-day .dailyshow {
        color: #3385ff;
        font-size: 14px;
    }
    .dailybox .week-day .week-box {
        width: 280px;
        box-sizing: border-box;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        background-color: #3385ff;
    }
    .dailybox .week-day .week-box .week {
        width: 40px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        color: #fff;
    }
    .dailybox .week-day .everyday {
        width: 280px;
        box-sizing: border-box;
        display: flex;
        flex-wrap: wrap;
    }
    .dailybox .week-day .everyday .day {
        width: 40px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        box-sizing: border-box;
    }
    .dailybox .week-day .everyday .day .other-day {
        width: 40px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        color: #ccc;
    }
    .dailybox .week-day .everyday .day .now-day {
        background-color: #3385ff;
        color: #fff;
    }
    .dailybox .week-day .everyday .day .active-day {
        border: 2px solid #3385ff;
        height: 36px;
    }
</style>