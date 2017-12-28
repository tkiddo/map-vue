<template>
<transition name="fade">
  <el-form :model='formData' lanel-width='80px' class="search" label-position='right' v-show='searchShow'>
      <h3>搜索</h3>
      <el-form-item label='名称'>
          <el-input v-model='formData.name'></el-input>
      </el-form-item>
      <el-form-item>
          <el-button type="primary" @click="onSubmit">检索</el-button>
          <el-button @click='cancel'>取消</el-button>
      </el-form-item>
  </el-form>
</transition>
</template>

<script>
import {mapActions,mapGetters} from 'vuex'
import axios from 'axios'
import config from '../config'
export default {
  data() {
    return {
      formData: {
        name: ""
      }
    };
  },
  computed:{
    ...mapGetters([
      'searchShow'
    ])
  },
  methods: {
    onSubmit() {
      this.changeResultShow(true);
      this.changeLoading(true);
      this.updateResult({page:1})
    },
    cancel(){
      this.changeSearchShow(false)
    },
    ...mapActions([
      'changeSearchShow',
      'updateResult',
      'changeResultShow',
      'changeLoading'
    ])
  }
};
</script>

<style lang="scss">
.search{
    width:350px;
    background: #fff;
    padding:20px;
    color:#000;
    z-index: 1114;
    position: absolute;
    border-radius: 10px;
    border:1px solid lightgray;
    top:50px;
    left: 50px;
}
</style>


