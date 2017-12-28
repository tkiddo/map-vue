<template>
  <div ref="popup" class="ol-popup" v-show='overlayShow'>  
        <a href="#" ref="popupCloser" class="ol-popup-closer" @click="hideOverlay"></a>  
        <div ref="popupContent" style="width:300px; height:120px;">
          <h3>名称:{{featureInfo.name}}</h3>
          <p>类型:{{featureInfo.type}}</p>
          <p style='font-size:12px'>坐标:{{featureInfo.coords}}</p>
        </div>  
  </div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex'
export default {
  computed:{
      ...mapGetters([
          'featureInfo',
          'overlayShow'
      ])
  },
  mounted(){
      let that = this;
      let container = that.$refs.popup;
        let overlay = new ol.Overlay({
          element: container,
          autoPan: true,
          autoPanAnimation: {
            duration: 250
          }
        });
      that.setOverlay(overlay);
  },
  methods:{
      ...mapActions([
          'setOverlay',
          'changeOverlayState'
      ]),
      hideOverlay(){
        this.changeOverlayState(false)
      }
  }
}
</script>

<style lang="scss">
.ol-popup {
  position: absolute;
  background-color: white;
  -webkit-filter: drop-shadow(0 1px 4px rgba(0, 0, 0, 0.2));
  filter: drop-shadow(0 1px 4px rgba(0, 0, 0, 0.2));
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #cccccc;
  bottom: 12px;
  left: -50px;
  h3,
  p {
    margin-top: 10px;
  }
}
.ol-popup:after,
.ol-popup:before {
  top: 100%;
  border: solid transparent;
  content: " ";
  height: 0;
  width: 0;
  position: absolute;
  pointer-events: none;
}
.ol-popup:after {
  border-top-color: white;
  border-width: 10px;
  left: 48px;
  margin-left: -10px;
}
.ol-popup:before {
  border-top-color: #cccccc;
  border-width: 11px;
  left: 48px;
  margin-left: -11px;
}
.ol-popup-closer {
  text-decoration: none;
  position: absolute;
  top: 2px;
  right: 8px;
}
.ol-popup-closer:after {
  content: "✖";
}
</style>


