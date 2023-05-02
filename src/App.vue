<script setup>
const active = "2"
</script>

<template>
  <div class="container">
    <router-view></router-view>
    <van-tabbar :fixed="false" route active-color="deeppink">
      <van-tabbar-item :to="{name:'Home'}" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item :to="{name:'List'}" icon="fire-o">热卖</van-tabbar-item>
      <van-tabbar-item :to="{name:'Cart'}" icon="cart-o" badge="7">购物车</van-tabbar-item>
      <van-tabbar-item :to="{name:'User'}" icon="user-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<style scoped></style>
