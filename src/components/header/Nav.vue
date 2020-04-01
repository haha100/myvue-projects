<template>
  <div class="my-nav">
    <ul class="nav">
      <li class="nav-list">
        <router-link class="mymt" to="/">我的美团</router-link>
        <ul class="hid mymt-ul">
          <li>
            <router-link class="mylist" to="/">我的订单</router-link>
          </li>
          <li>
            <router-link class="mycollect" to="/">我的收藏</router-link>
          </li>
          <li>
            <router-link class="ticket" to="/">抵用券</router-link>
          </li>
          <li>
            <router-link class="user-set" to="/">账户设置</router-link>
          </li>
        </ul>
      </li>
      <li class="nav-list iphone-app">
        <router-link class="iphone" to="/">手机APP</router-link>
      </li>
      <li class="nav-list">
        <router-link class="store-center" to="/">商家中心</router-link>
        <dl class="hid store-center-dl">
          <dd>
            <router-link to="/">登录商家中心</router-link>
          </dd>
          <dd>
            <router-link to="/">美团只能收银</router-link>
          </dd>
          <dd>
            <router-link to="/">我想合作</router-link>
          </dd>
          <dd>
            <router-link to="/">手机免费开店</router-link>
          </dd>
          <dd>
            <router-link to="/">餐饮代理商招募</router-link>
          </dd>
          <dd>
            <router-link to="/">商家申请开票</router-link>
          </dd>
          <dd>
            <router-link to="/">免费合作美团排队</router-link>
          </dd>
        </dl>
      </li>
      <li class="nav-list">
        <router-link class="mtrule" to="/">美团规则</router-link>
        <dl class="hid rule-dl">
          <dd>
            <router-link to="/">规则中心</router-link>
          </dd>
          <dd>
            <router-link to="/">规则目录</router-link>
          </dd>
          <dd>
            <router-link to="/">规则评议院</router-link>
          </dd>
        </dl>
      </li>
      <li class="nav-list">
        <router-link class="web-nav" to="/">网站导航</router-link>
        <div class="subContainer hid">
          <dl class="hotel-trip">
            <dt>酒店旅游</dt>
            <dd>
              <router-link to="/">国际机票</router-link>
            </dd>
            <dd>
              <router-link to="/">火车票</router-link>
            </dd>
            <dd>
              <router-link to="/">榛果民宿</router-link>
            </dd>
            <dd>
              <router-link to="/">经济型酒店</router-link>
            </dd>
            <dd>
              <router-link to="/">主题酒店</router-link>
            </dd>
            <dd>
              <router-link to="/">商务酒店</router-link>
            </dd>
            <dd>
              <router-link to="/">公寓</router-link>
            </dd>
            <dd>
              <router-link to="/">客栈</router-link>
            </dd>
          </dl>
          <dl class="eat">
            <dt>吃美食</dt>
            <dd>
              <router-link to="/">烤鱼</router-link>
            </dd>
            <dd>
              <router-link to="/">特色小吃</router-link>
            </dd>
            <dd>
              <router-link to="/">烧烤</router-link>
            </dd>
            <dd>
              <router-link to="/">自助餐</router-link>
            </dd>
            <dd>
              <router-link to="/">火锅</router-link>
            </dd>
            <dd>
              <router-link to="/">代金券</router-link>
            </dd>
          </dl>
          <dl class="watch-movies">
            <dt>看电影</dt>
            <dd>
              <router-link to="/">热映电影</router-link>
            </dd>
            <dd>
              <router-link to="/">热门影院</router-link>
            </dd>
            <dd>
              <router-link to="/">热映电影口碑榜</router-link>
            </dd>
            <dd>
              <router-link to="/">最受期待电影</router-link>
            </dd>
            <dd>
              <router-link to="/">国内票房榜</router-link>
            </dd>
            <dd>
              <router-link to="/">北美票房榜</router-link>
            </dd>
          </dl>
          <dl class="iphone-app">
            <dt>手机应用</dt>
            <dd>
              <a href="https://i.meituan.com/mobile/down/meituan">
                <img src="//s0.meituan.net/bs/fe-web-meituan/2d53095/img/appicons/meituan.png" alt="美团" />
              </a>
            </dd>
            <dd>
              <a href="https://waimai.meituan.com/mobile/download/default">
                <img src="//s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/waimai.png" alt="美团外卖" />
              </a>
            </dd>
            <dd>
              <a href="https://phoenix.meituan.com/app/">
                <img src="//s0.meituan.net/bs/fe-web-meituan/404d350/img/appicons/zhenguo.png" alt="榛果app" />
              </a>
            </dd>
            <dd>
              <a href="https://www.dianping.com/events/m/index.htm">
                <img src="//s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/dianping.png" alt="点评app" />
              </a>
            </dd>
            <dd>
              <a href="https://maoyan.com/app">
                <img src="//s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/maoyan.png" alt="猫眼app" />
              </a>
            </dd>
          </dl>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>