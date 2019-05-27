<template>
    <div class="footer_guide">
      <router-link :to="{name: 'msite'}" 
        class="guide_item" 
        :class="{on: '/msite' === $route.path}">
        <i class="iconfont icon-waimai"></i>
        <span>外卖</span>
      </router-link>
      <router-link 
        :to="{name: 'search'}" 
        class="guide_item" 
        :class="{on: '/search' === $route.path}">
        <i class="iconfont icon-search"></i>
        <span>搜索</span>
      </router-link>
      <router-link 
        :to="{name: 'order'}" 
        class="guide_item" 
        :class="{on: '/order' === $route.path}">
        <i class="iconfont icon-dingdan"></i>
        <span>订单</span>
      </router-link>
      <router-link 
        :to="{name: 'profile'}" 
        class="guide_item" 
        :class="{on: '/profile' === $route.path}">
        <i class="iconfont icon-geren"></i>
        <span>我的</span>
      </router-link>
    </div>
</template>

<script>
export default {    
  data() {
    return {}
  },
  methods: {

  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import "../../assets/stylus/mixin.styl"
  .footer_guide // footer
    border-top 1px solid #e4e4e4
    position fixed
    z-index 100
    left 0
    right 0
    bottom 0
    width 100%
    height 50px
    display flex
    justify-content space-around
    .guide_item
      display flex
      flex-direction  column
      align-items center
      margin 5px
      color #999999
      &.on
        color #02a774     
      .iconfont
        font-size 22px
      span 
        margin-top 5px
      

    
  
  

</style>

