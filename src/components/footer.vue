<template>
  <div id="footer">
    <mu-tabs :value="activeTab" @change="handleTabChange">
      <mu-tab value="tab1" icon="phone" title="RECENTS"/>
      <mu-tab value="tab2" icon="favorite" title="FAVORITES"/>
      <mu-tab value="tab3" icon="person_pin" title="NEARBY"/>
    </mu-tabs>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        activeTab: 'tab1'
      }
    },
    methods: {
      handleTabChange (val) {
        this.activeTab = val
      }
    }
  }
</script>

<style>
</style>
