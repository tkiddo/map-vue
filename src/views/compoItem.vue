<template>
  <wheels v-if="obj">
      <div slot="title">
          <p class="title">{{obj.title}}</p>
      </div>
      <div slot="content" class="content">
          <timer :endTime='obj.endTime' :callback='callback' :endText="obj.endText" v-if="obj.name=='timer'"></timer>
      </div>
  </wheels>
</template>

<script>
import wheels from "../components/wheels.vue";
import timer from "../components/wheels/time.vue";
export default {
  components: {
    wheels,
    timer
  },
  data() {
    return {
      wheel: {
        timer: {
          name:'timer',
          title: "倒计时器",
          endTime: "1513762200",
          endText: "done"
        }
      }
    }
  },
  computed:{
      obj(){
          let name = this.$route.params.name;
          let wheel = this.wheel;
          return wheel[name]
      }
  },
  methods: {
    callback() {
      console.log("done");
    }
  }
};
</script>

<style lang="scss" scoped>
.title{
    color:ghostwhite;
    padding: 10px;
    background: slategray;
    letter-spacing: 5px;
}
.content{
    padding:15px;
}
</style>


