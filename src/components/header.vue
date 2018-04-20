<template>
    <div id="header">
      <mu-appbar :title="title">
        <mu-icon-button icon="arrow_back_ios" slot="left" v-if="leftShow"/>
        <mu-icon-button icon="" slot="right" v-if="rightShow"/>
      </mu-appbar>
      </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      title: String,
      leftShow: Boolean,
      rightShow: Boolean
    },
    data () {
      return {
      }
    }
  }
</script>

<style>
  #header{
    position: fixed;
    width: 100%;
    top:0;
    z-index: 999;
    max-width: 640px;
  }
  .mu-appbar{
    height: auto;
  }
  .mu-appbar-title{
    padding: 1.5rem 0 0.8rem 0;
    line-height: 1;
  }
  .mu-appbar-title{
    text-align: center;
  }
  .mu-appbar-title span{
    font-style: italic;
    font-size: 2.2rem;
  }
</style>
