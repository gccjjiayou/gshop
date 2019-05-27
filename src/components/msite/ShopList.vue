<template>
<div class="shop-container">
  <ul class="shop-list" v-if="shops.length">
    <li class="shop-li border-1px" v-for="(shop, index) in shops"
      :key="index" @click="$router.push('/shop')">
      <a href="">
        <div class="shop-left">
          <img class="" src="" alt="">
        </div>
        <div class="shop-right"></div>
      </a>
    </li>

  </ul>
  
</div>
  
</template>

<script>
export default {
  
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "../../assets/stylus/mixin.styl"
  .shop-container
    margin-bottom 50px
    // .shop-list

</style>
