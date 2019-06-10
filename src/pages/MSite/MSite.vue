<template>
  <section class="msite">
    <!--首页头部-->
    <Header :title="address.name || '正在定位中...'">
      <span class="header_login" slot="right">
        <span class="header_login_text">登录|注册</span>
      </span>
      <span class="header_search" slot="left">
        <i class="iconfont icon-sousuo"></i>
      </span>
    </Header>
    <!--首页导航-->
    <nav class="msite_nav">
      <div class="swiper-container" v-if="categorys.length > 0">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(categorys, index) in categorysArr" :key="index">
            <a href="javascript:" class="link_to_food" v-for="(category) in categorys"
               :key="category.id">
              <div class="food_container">
                <img :src="'https://fuss10.elemecdn.com' + category.image_url">
              </div>
              <span>{{category.title}}</span>
            </a>
          </div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
      </div>
      <div v-else>
        <img src="./images/msite_back.svg" alt="loading">
      </div>
    </nav>
    <!--首页附近商家-->
    <ShopList/>
  </section>
</template>

<script type="text/ecmascript-6">
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.css'
  import ShopList from 'components/ShopList/ShopList.vue'
  import {mapState} from 'vuex'
  export default {
    name: 'MSite',
    computed: {
      ...mapState(['address', 'categorys']),
      categorysArr () {
        const {categorys} = this
        const bigArr = []
        while(bigArr.length * 8 < categorys.length){
          bigArr.push(categorys.slice(bigArr.length * 8, (bigArr.length + 1) * 8))
        }
        return bigArr
      }

      /*categorysArr () {
        const {categorys} = this
        const bigArr = []
        let smallArr = []
        categorys.forEach(c => {
          if (smallArr.length === 0) {
            bigArr.push(smallArr)
          }
          smallArr.push(c)
          if (smallArr.length === 8) {
            smallArr = []
          }
        })
        return bigArr
      }*/

    },
    mounted () {

      this.$store.dispatch('getCategorys')
      this.$store.dispatch('getShops')
    },
    watch: {
      categorys () {
        this.$nextTick(() => {
          /* eslint-disable no-new */
          new Swiper('.swiper-container', {
            loop: true,
            pagination: {
              el: '.swiper-pagination'
            }
          })
        })
      }
    },
    components: {
      ShopList
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../common/stylus/mixins.styl'

  .msite //首页
    width 100%
    .msite_nav
      bottom-border-1px(#e4e4e4)
      margin-top 45px
      height 200px
      background #fff
      .swiper-container
        width 100%
        height 100%
        .swiper-wrapper
          width 100%
          height 100%
          .swiper-slide
            display flex
            justify-content center
            align-items flex-start
            flex-wrap wrap
            .link_to_food
              width 25%
              .food_container
                display block
                width 100%
                text-align center
                padding-bottom 10px
                font-size 0
                img
                  display inline-block
                  width 50px
                  height 50px
              span
                display block
                width 100%
                text-align center
                font-size 13px
                color #666
        .swiper-pagination
          > span.swiper-pagination-bullet-active
            background #02a774
</style>
