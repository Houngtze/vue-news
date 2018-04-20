<template>
  <div>
    <v-header :title="title" :leftShow="true" :rightShow="true" v-on:click.native="goBack"></v-header>
    <iframe frameborder=0 id="iframe" scrolling=auto :src="url" :height="screenHeight"></iframe>
    <div class="loading" v-show="loadingShow"></div>
  </div>
</template>

<script type="text/ecmascript-6">
  import header from '../components/header'
  import router from '../router'

  export default {
    data () {
      return {
        title: '新闻内容',
        url: '',
        loadingShow: true,
        screenHeight: ''
      }
    },
    components: {
      'v-header': header
    },
    methods: {
      goBack () {
        router.push({name: 'index'})
      }
    },
    activated () {
      var self = this
      this.url = this.$route.params.url
      this.screenHeight = window.screen.height
      let iframe = document.getElementById('iframe')
      if (iframe.attachEvent) {
        iframe.attachEvent('onload', function () {
          self.loadingShow = false
          console.log('ok')
          document.getElementById('iframe').getElementById('redP').style.display = 'none'
        })
      } else {
        iframe.onload = function () {
          self.loadingShow = false
          console.log('ok')
          document.getElementById('iframe').getElementById('redP').style.display = 'none'
        }
      }
    }
  }
</script>

<style>
  @import '../assets/reset.css';
  iframe {
    width: 100%;
    overflow: hidden;
    padding-top: 55px;
  }
  #redP {
    display: none;
  }
</style>
