<template>
  <div class="wheels">
      <h3>轮子工厂</h3>
      <ul>
          <li v-for="(item,index) in wheels" @click="goRouter(item)">{{index+1}}.{{item.text}}</li>
      </ul>
  </div>
</template>


<script>
export default {
  data(){
      return {
          wheels:[
              {
                  text:'计时器',
                  name:'timer',
              }
          ]
      }
  },
  methods:{
      goRouter(obj){
          this.$router.push({name:'compoItem',params:{name:obj.name}})
      }
  }
}
</script>

<style lang="scss" scoped>
h3{
    padding:15px;
    background: lightseagreen;
    color:#fff;
    letter-spacing: 5px;
}
ul{
    padding:15px;
    & li{
        font-size: 20px;
        padding:10px;
        list-style: none;
        color:darkgray;
        letter-spacing: 5px;
        cursor: pointer;
    }
}
</style>

