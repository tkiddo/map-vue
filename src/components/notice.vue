<template>
  <div class="notice">
      {{notice}}
  </div>
</template>

<script>
import {mapActions,mapGetters} from 'vuex'
export default {
  computed:{
      ...mapGetters([
          'notice'
      ])
  }
}
</script>

<style lang="scss">
.notice{
    padding:20px;
    max-width: 300px;
    position:fixed;
    left: 15px;
    bottom:15px;
    background-color: #fff;
    border-radius: 10px;
    word-break: break-all
}
</style>


