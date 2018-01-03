<template>
  <div>
      <t-menu></t-menu>
      <t-map></t-map>
      <t-popup></t-popup>
      <t-search></t-search>
      <t-result></t-result>
      <t-notice></t-notice>
  </div>
</template>

<script>
import tMenu from '../components/menu.vue'
import tMap from '../components/map.vue'
import tPopup from '../components/popup.vue'
import tSearch from '../components/search.vue'
import tResult from '../components/result.vue'
import tNotice from '../components/notice.vue'
export default {
  components:{
      tMenu,
      tMap,
      tPopup,
      tSearch,
      tResult,
      tNotice
  },
  mounted(){
    console.log(this.$route)
  }
}
</script>

