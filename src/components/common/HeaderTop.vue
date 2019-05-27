<template>
  <header class="header">
    <slot name="left"></slot>
    <span class="header-title">{{title}}</span>
    <slot name="right"></slot>
  </header>
</template>

<script>
export default {
  props: {
    title: String
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .header
    background-color #02a774
    height 45px
    position fixed
    left 0
    top 0
    right 0
    z-index 100
    .header-search
      position absolute 
      left 15px
      top 50%
      transform translateY(-50%)
      .icon-sousuo
        font-size 25px !important
        color #fff
    .header-title
      position absolute
      top 50%
      left 50%
      transform translate(-50%, -50%)
      color #fff
    .header-login
      position absolute
      top 50% 
      right 15px
      transform translateY(-50%)




</style>
