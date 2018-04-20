<template>
  <div id="index" class="animated fadeIn">
    <v-header :title="title" :leftShow="false" :rightShow="false" ></v-header>
    <div class="wrapper" ref="wrapper">
      <mu-tabs :value="iniTab" @change="handleTabChange" class="content">
        <mu-tab value="top" title="头条" class="top"/>
        <mu-tab value="shehui" title="社会" class="shehui"/>
        <mu-tab value="guonei" title="国内" class="guonei"/>
        <mu-tab value="guoji" title="国际" class="guoji"/>
        <mu-tab value="yule" title="娱乐" class="yule"/>
        <mu-tab value="tiyu" title="体育" class="tiyu"/>
        <mu-tab value="junshi" title="军事" class="junshi"/>
        <mu-tab value="keji" title="科技" class="keji"/>
        <mu-tab value="caijing" title="财经" class="caijing"/>
        <mu-tab value="shishang" title="时尚" class="shishang"/>
      </mu-tabs>
    </div>
    <div v-show="iniTab=='top'" :class="iniTab" class="news-content">
      <ul>
        <li v-for="(item,index) in newList['top']" class="news-item"  @click="goToContent(item.url)">
          <div class="left">
            <img v-lazy="item.thumbnail_pic_s">
          </div>
          <div class="right">
            <h1> {{ item.title }} </h1>
            <p>
              <em> {{ item.date }} </em>
              <em> {{ item.author_name }} </em>
            </p>
          </div>
        </li>
      </ul>
    </div>
    <div v-show="iniTab=='shehui'" :class="iniTab" class="news-content">
      <ul>
        <li v-for="(item,index) in newList['shehui']" class="news-item"  @click="goToContent(item.url)">
          <div class="left">
            <img v-lazy="item.thumbnail_pic_s">
          </div>
          <div class="right">
            <h1> {{ item.title }} </h1>
            <p>
              <em> {{ item.date }} </em>
              <em> {{ item.author_name }} </em>
            </p>
          </div>
        </li>
      </ul>
    </div>
    <div v-show="iniTab=='guonei'" :class="iniTab" class="news-content">
      <ul>
        <li v-for="(item,index) in newList['guonei']" class="news-item"  @click="goToContent(item.url)">
          <div class="left">
            <img v-lazy="item.thumbnail_pic_s">
          </div>
          <div class="right">
            <h1> {{ item.title }} </h1>
            <p>
              <em> {{ item.date }} </em>
              <em> {{ item.author_name }} </em>
            </p>
          </div>
        </li>
      </ul>
    </div>
    <div v-show="iniTab=='guoji'" :class="iniTab" class="news-content">
      <ul>
        <li v-for="(item,index) in newList['guoji']" class="news-item"  @click="goToContent(item.url)">
          <div class="left">
            <img v-lazy="item.thumbnail_pic_s">
          </div>
          <div class="right">
            <h1> {{ item.title }} </h1>
            <p>
              <em> {{ item.date }} </em>
              <em> {{ item.author_name }} </em>
            </p>
          </div>
        </li>
      </ul>
    </div>
    <div v-show="iniTab=='yule'" :class="iniTab" class="news-content">
      <ul>
        <li v-for="(item,index) in newList['yule']" class="news-item"  @click="goToContent(item.url)">
          <div class="left">
            <img v-lazy="item.thumbnail_pic_s">
          </div>
          <div class="right">
            <h1> {{ item.title }} </h1>
            <p>
              <em> {{ item.date }} </em>
              <em> {{ item.author_name }} </em>
            </p>
          </div>
        </li>
      </ul>
    </div>
    <div v-show="iniTab=='tiyu'" :class="iniTab" class="news-content">
      <ul>
        <li v-for="(item,index) in newList['tiyu']" class="news-item"  @click="goToContent(item.url)">
          <div class="left">
            <img v-lazy="item.thumbnail_pic_s">
          </div>
          <div class="right">
            <h1> {{ item.title }} </h1>
            <p>
              <em> {{ item.date }} </em>
              <em> {{ item.author_name }} </em>
            </p>
          </div>
        </li>
      </ul>
    </div>
    <div v-show="iniTab=='junshi'" :class="iniTab" class="news-content">
      <ul>
        <li v-for="(item,index) in newList['junshi']" class="news-item"  @click="goToContent(item.url)">
          <div class="left">
            <img v-lazy="item.thumbnail_pic_s">
          </div>
          <div class="right">
            <h1> {{ item.title }} </h1>
            <p>
              <em> {{ item.date }} </em>
              <em> {{ item.author_name }} </em>
            </p>
          </div>
        </li>
      </ul>
    </div>
    <div v-show="iniTab=='keji'" :class="iniTab" class="news-content">
      <ul>
        <li v-for="(item,index) in newList['keji']" class="news-item"  @click="goToContent(item.url)">
          <div class="left">
            <img v-lazy="item.thumbnail_pic_s">
          </div>
          <div class="right">
            <h1> {{ item.title }} </h1>
            <p>
              <em> {{ item.date }} </em>
              <em> {{ item.author_name }} </em>
            </p>
          </div>
        </li>
      </ul>
    </div>
    <div v-show="iniTab=='caijing'" :class="iniTab" class="news-content">
      <ul>
        <li v-for="(item,index) in newList['caijing']" class="news-item"  @click="goToContent(item.url)">
          <div class="left">
            <img v-lazy="item.thumbnail_pic_s">
          </div>
          <div class="right">
            <h1> {{ item.title }} </h1>
            <p>
              <em> {{ item.date }} </em>
              <em> {{ item.author_name }} </em>
            </p>
          </div>
        </li>
      </ul>
    </div>
    <div v-show="iniTab=='shishang'" :class="iniTab" class="news-content">
      <ul>
        <li v-for="(item,index) in newList['shishang']" class="news-item"  @click="goToContent(item.url)">
          <div class="left">
            <img v-lazy="item.thumbnail_pic_s">
          </div>
          <div class="right">
            <h1> {{ item.title }} </h1>
            <p>
              <em> {{ item.date }} </em>
              <em> {{ item.author_name }} </em>
            </p>
          </div>
        </li>
      </ul>
    </div>
    <mu-back-top :duration="100"/>
    <!--<mu-toast v-if="toast" message="123" @close="hideToast"/>-->
    <div class="loading" v-if="loadingShow"></div>
    <div class="none" v-if="noneShow">
      <img src="../assets/image/none.png">
      <p>-暂无数据-</p>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import header from '../components/header'
  import { fetchNewsData } from '../api'
  import Bscroll from 'better-scroll'
  import router from '../router'

  export default {
    data () {
      return {
        title: '頭條',
        iniTab: 'top',
        switchTab: 'top',
        content: '',
        newList: {
          'top': [],
          'shehui': [],
          'guonei': [],
          'guoji': [],
          'yule': [],
          'tiyu': [],
          'junshi': [],
          'keji': [],
          'caijing': [],
          'shishang': []
        },
        loadingShow: true,
        noneShow: false,
        toast: false,
        tabPosition: 0,
        hasFetch: {
          'top': true,
          'shehui': false,
          'guonei': false,
          'guoji': false,
          'yule': false,
          'tiyu': false,
          'junshi': false,
          'keji': false,
          'caijing': false,
          'shishang': false
        }
      }
    },
    components: {
      'v-header': header
    },
    methods: {
      handleTabChange (val) {
//        document.documentElement.scrollTop = document.body.scrollTop = 0  // 列表置顶
//        tab滚动显示
        let elPosition = document.querySelector('.' + val).offsetLeft
        let screenWidth = window.screen.width
        let outWidth = elPosition + 70 - screenWidth
        let needScroll = outWidth + screenWidth / 2 - 35
        console.log(needScroll)
        if (needScroll > 0 && needScroll < (700 - screenWidth)) {
          this.scroll.scrollTo(-needScroll, 0)    // tab点击滚动居中
        }
        if (needScroll < 0) {
          this.scroll.scrollTo(0, 0)
        }
        if (needScroll > (700 - screenWidth)) {
          this.scroll.scrollTo(-(700 - screenWidth), 0)
        }
        this.iniTab = val
        let clicker = this.hasFetch[val]    // 是否点击过
        console.log(clicker)
        if (!clicker) {
          this.loadingShow = true
          fetchNewsData(this.iniTab).then((res) => {
            if (res.data.error_code === 10012 || !res) {
              console.warn('网络出错了')
              this.loadingShow = false
              this.noneShow = true
              this.showToast()
              return
            }
            this.newList[val] = res.data.result.data
            console.log(this.newList)
            this.loadingShow = false
            this.hasFetch[val] = true
          })
        }
      },
      goToContent (url) {
        router.push({name: 'content', params: {url: url}})
      },
      showToast () {
        this.toast = true
        if (this.toastTimer) clearTimeout(this.toastTimer)
        this.toastTimer = setTimeout(() => { this.toast = false }, 1000000)
      },
      hideToast () {
        this.toast = false
        if (this.toastTimer) clearTimeout(this.toastTimer)
      }
    },
    created () {
      fetchNewsData(this.iniTab).then((res) => {
        console.log(res)
        if (res.data.error_code === 10012 || !res) {
          console.log(res)
          console.warn('网络出错了')
          this.loadingShow = false
          this.noneShow = true
          this.showToast()
          return
        }
        this.newList['top'] = res.data.result.data
        console.log(this.newList)
        this.loadingShow = false
      })
    },
    deactivated () {
    },
    mounted () {
      this.$nextTick(() => {
        this.scroll = new Bscroll(this.$refs.wrapper, {
          scrollX: true,
          scrollY: false,
          click: true,
          bounce: false,
          probeType: 2,
          scroll: this.tabPosition
        })
      })
    }
  }
</script>


<style>
  @import '../assets/reset.css';

  .none {
    width: 100%;
    text-align: center;
    margin: 30% 0;
    font-size: 2rem;
    color: #dddddd;
  }

  .none img {
    width: 30%;
    margin-bottom: 1rem;
  }

  .wrapper {
    overflow: hidden;
    padding-top: 4.5rem;
    position: fixed;
    width: 100%;
    background: #f0f0f0;
    border-bottom: 1px solid rgba(244, 244, 244, 0.04);
    z-index: 990;
    max-width: 640px;
  }

  .wrapper .content {
    width: 700px;
    overflow: hidden;
  }

  .mu-tabs {
    background-color: #ffffff;
    width: 1000px;
  }

  .mu-tab-link-highlight {
    background-color: #474a4f;
  }

  .mu-tab-link {
    color: #000;
    min-height: auto;
    padding-top: 1rem;
    padding-bottom: 1rem;
    line-height: 1;
    font-size: 1.5rem;
  }

  .appbar-search-field {
    color: #FFF;
    margin-bottom: 0;
    &.focus-state {
      color: #FFF;
    }
    .mu-text-field-hint {
      color: fade(#FFF, 54%);
    }
    .mu-text-field-input {
      color: #FFF;
    }
    .mu-text-field-focus-line {
      background-color: #FFF;
    }
  }

  .news-content {
    width: 100%;
    overflow: hidden;
    padding-top: 8rem;
  }

  .news-content .news-item {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    display: -webkit-flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: end;
    background: #fff;
    padding: 1rem;
    position: relative;
  }

  .news-content .news-item:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    right: auto;
    top: auto;
    height: 1px;
    width: 100%;
    background-color: #f0f0f0;
    display: block;
    z-index: 15;
    -webkit-transform-origin: 50% 100%;
    transform-origin: 50% 100%;
  }

  .news-content .news-item .left {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    overflow: hidden;
  }

  .news-content .news-item .left img {
    width: 100%;
  }

  .news-content .news-item .right {
    -webkit-box-flex: 2.5;
    flex: 2.5 1 0%;
  }

  .news-content .news-item .right h1 {
    font-size: 1.5rem;
    padding-left: 1rem;
    line-height: 1.2;
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  .news-content .news-item .right p {
    padding: 1rem;
  }

  .mu-back-up{
    z-index: 900;
  }

  .mu-back-up-default[data-v-7fd436bc] {
    background-color: #ccc;
  }

  .mu-toast {
    width: auto;
  }
</style>

