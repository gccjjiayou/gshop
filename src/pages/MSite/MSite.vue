<template>
  <div class="msite">
    <header-top class="msite-header" title="昌平区北七家宏福...">
      <router-link class="header-search" slot="left" :to="{name: 'search'}">
        <i class="iconfont icon-sousuo"></i>
      </router-link>
      <router-link class="header-login" slot="right" :to="{name: 'profile'}">
        <i class="iconfont icon-person"></i>
      </router-link>
    </header-top>
    <div class="msite-content">
      <nav class="msite-nav">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <router-link to="#" class="link-to-food">
                <div>
                  <img src="../../assets/images/nav/1.jpg" alt="">
                </div> 
                <span>甜品饮品</span>
              </router-link>
              <router-link to="#" class="link-to-food">
                <div>
                  <img src="../../assets/images/nav/1.jpg" alt="">
                </div> 
                <span>甜品饮品</span>
              </router-link>
              <router-link to="#" class="link-to-food">
                <div>
                  <img src="../../assets/images/nav/1.jpg" alt="">
                </div> 
                <span>甜品饮品</span>
              </router-link>
              <router-link to="#" class="link-to-food">
                <div>
                  <img src="../../assets/images/nav/1.jpg" alt="">
                </div> 
                <span>甜品饮品</span>
              </router-link>
            </div>
            <div class="swiper-slide">Slide 2</div>
            <div class="swiper-slide">Slide 3</div>
          </div>
        
          <div class="swiper-pagination"></div>

        
          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>

          
          <div class="swiper-scrollbar"></div>
        </div>
      </nav>
      <shop-list></shop-list>
    </div>
  </div>
</template>

<script>
import HeaderTop from "@/components/common/HeaderTop.vue";
import ShopList from '@/components/msite/ShopList.vue'
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";
import BScroll from 'better-scroll'
export default {
  components: {
    "header-top": HeaderTop,
    "shop-list": ShopList
  },
  data() {
    return {
      address: "昌平区北七家宏福..."
    };
  },
  mounted() {
    this.$nextTick(() => {
      new Swiper('.swiper-container', {
        loop: true,
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination'
        }
      })
      // new BScroll('.miste-content-wrapper', {
      //     click: true
      //  })
    }) 
  },
  created() {
    new Swiper('.swiper-container', {
      direction: 'horizontal',
      loop: true,
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination'
        }
    })
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '../../assets/stylus/mixin.styl'
.msite
  width 100%
  .msite-content
    width 100%
    position fixed
    top 45px
    bottom 50px
  .swiper-container 
      width 100%
      height 100%
      border-bottom 1px solid red
      .swiper-slide
        display flex
        justify-content center 
        align-items flex-start
        flex-wrap wrap
        .link-to-food
          width 25%
        
    
 
</style>
