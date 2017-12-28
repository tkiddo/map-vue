<template>
  <transition name="fade">
      <div class="subMenu">
        <div class="subItem menuItem" v-for='subItem in item.children' @click.stop='interAction(item.operation,subItem.type)'>{{subItem.text}}</div>
      </div>
  </transition>   
</template>

<script>
export default {
  
}
</script>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>


