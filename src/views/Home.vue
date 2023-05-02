<script setup>
import { ref } from "vue"
const value = ref("")
</script>

<template>
  <div class="home">
    <van-search shape="round" background="#1f2233" v-model="value" placeholder="请输入搜索关键词" />
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item>
        <img
          src="https://bbs-static.miyoushe.com/static/2023/04/28/2013b705a2e6043ef91800f564987a40_8314363999027665829.jpg"
          alt="">
      </van-swipe-item>
      <van-swipe-item>
        <img
          src="https://bbs-static.miyoushe.com/static/2023/04/27/54aa271660623c5b9d7a38f9e841e5ad_7502964789186200768.jpg"
          alt="">
      </van-swipe-item>
      <van-swipe-item>
        <img
          src="https://bbs-static.miyoushe.com/static/2023/04/28/1d8297a89bb45c72247ccbdfb4f9f68c_3632674286069439673.png"
          alt="">
      </van-swipe-item>
    </van-swipe>
    <van-notice-bar left-icon="volume-o" text="无论我们能活多久，我们能够享受的只有无法分割的此刻，此外别无其他。" />
    <van-grid :gutter="10">
      <van-grid-item icon="photo-o" text="文字" />
      <van-grid-item icon="photo-o" text="文字" />
      <van-grid-item icon="photo-o" text="文字" />
      <van-grid-item icon="photo-o" text="文字" />
      <van-grid-item icon="photo-o" text="文字" />
      <van-grid-item icon="photo-o" text="文字" />
    </van-grid>
    <van-card v-for="i in 10"
  num="2"
  tag="标签"
  price="2.00"
  desc="描述信息"
  title="商品标题"
  thumb="https://fastly.jsdelivr.net/npm/@vant/assets/ipad.jpeg"
  origin-price="10.00"
/>
  </div>
</template>
<style scoped lang="scss">
.my-swipe .van-swipe-item {

  img {
    width: 100%;
  }
}
</style>