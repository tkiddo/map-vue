<template>
  <el-pagination
      class="page"
      small
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage"
      :page-size="pageSize"
      layout="total,prev, pager, next"
      :total="totalNumber">
    </el-pagination>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  methods: {
      handleCurrentChange(val) {
        this.changeLoading(true);
        this.updateResult({page:val});
      },
      ...mapActions([
        'updateResult',
        'changeLoading'
      ])
    },
    data() {
      return {
        currentPage: 1,
      };
    },
    props:['pageSize','totalNumber']
}
</script>

<style lang="scss">
.page{
    position: absolute;
    left: 5px;
    bottom:5px;
}
</style>

