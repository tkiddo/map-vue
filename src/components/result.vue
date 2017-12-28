<template>
<transition name='slide-fade'>
<div class="result" v-show = "resultShow">
    <h3>查询结果</h3>
    <img :src="cImg" alt="" @click="hide">
    <el-table
      v-loading="loading"
      stripe
      :data="searchResult.data">
      <el-table-column
        prop="name"
        label="名称"
        width="180">
      </el-table-column>
      <el-table-column
        prop="type"
        label="类型"
        width="180">
      </el-table-column>
   </el-table>
   <t-page :page-size = 'pageSize' :total-number="searchResult.total"></t-page>
</div>
</transition> 
</template>
<script>
import tPage from '../components/pagination.vue'
import {mapGetters,mapActions} from 'vuex'
import axios from 'axios'
import config from '../config'
export default {
  data(){
      return {
          pageSize:15,
          cImg:config.api.imgApi+'/static/images/hide.png',
      }
  },
  computed:{
      ...mapGetters([
          'searchResult',
          'resultShow',
          'loading'
      ])
  },
  methods:{
      ...mapActions([
          'changeResultShow'
      ]),
      hide(){
          this.changeResultShow(false)
      }
  },
  components:{
      tPage
  }
}
</script>

<style lang="scss" scoped>
.result{
    // text-align: center;
    background: #fff;
    position: absolute;
    top:50px;
    right: 30px;
    bottom:40px;
    padding:20px 0;
    border-radius: 10px;
    border:1px solid lightgray;
    padding-bottom: 50px;
    h3{
        padding-left:10px;
    }
    img{
        position: absolute;
        top:15px;
        right: 5px;
    }
}
.title{
    text-align: center;
}
</style>


