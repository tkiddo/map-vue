<template>
  <div id="map">
    <t-form></t-form> 
  </div>
</template>
<script>
import config from "../config/index";
import { mapGetters, mapActions, mapState } from "vuex";
import * as types from "../store/mutation-types";
import tForm from "../components/form.vue";
import tPopup from "./popup.vue";
export default {
  data() {
    return {
      map: null,
      feature: {
        name: "",
        type: "",
        coords: ""
      }
    };
  },
  computed: {
    ...mapGetters([
      "zoom",
      "markerLayer",
      "clickState",
      "markerFeatures",
      "markerIcon",
      "overlayShow",
      "overlay",
      "featuresOverlay"
    ])
  },
  components: {
    tForm,
    tPopup
  },
  methods: {
    ...mapActions([
      "getMap",
      "changeOverlayState",
      "setOverlay",
      "updateFeatureInfo"
    ]),
    init() {
      let that = this;
      let map = new ol.Map({
        interactions: ol.interaction.defaults({
          doubleClickZoom: false,
          altShiftDragRotate: false,
          pinchRotate: false
        }),
        layers: [
          new ol.layer.Tile({
            preload: 4,
            source: new ol.source.OSM()
          })
        ],
        target: "map",
        view: new ol.View({
          center: ol.proj.transform(
            config.map.center,
            "EPSG:4326",
            "EPSG:3857"
          ),
          zoom: config.map.zoom,
          maxZoom: config.map.maxZoom,
          minZoom: config.map.minZoom
        }),
        loadTilesWhileAnimating: true
      });
      map.addLayer(that.markerLayer);
      map.addLayer(that.featuresOverlay);
      let markerLayer = that.markerLayer;
      map.on("click", evt => {
        let pixel = map.getEventPixel(evt.originalEvent);
        let coords = map.getCoordinateFromPixel(pixel);
        if (that.clickState == "addMarker") {
          that.addMarker(coords);
        } else if (that.clickState == "featureInfo") {
          that.showFeatureInfo(coords, pixel);
        }
      });
      this.map = map;
      this.getMap(this.map);
    },
    addMarker(coords) {
      let that = this;
      let feature = new ol.Feature({
        geometry: new ol.geom.Point(coords),
        name: "添加标记",
        type: "addMarker"
      });
      feature.setStyle(
        new ol.style.Style({
          image: new ol.style.Icon({
            crossOrigin: "anonymous",
            src: that.markerIcon
          })
        })
      );
      that.markerFeatures.push(feature);
      let vectorSource = new ol.source.Vector({
        features: that.markerFeatures
      });
      that.markerLayer.setSource(vectorSource);
    },
    showFeatureInfo(coords, pixel) {
      let that = this;
      let map = that.map;
      that.$store.commit(types.CHANGE_OVERLAYSTATE, true);
      let feature = map.forEachFeatureAtPixel(pixel, (feature, layer) => {
        return feature;
      });
      if (feature) {
        let properties = feature.getProperties();
        that.updateFeatureInfo({
          name: properties.name,
          type: properties.type,
          coords: coords
        });
        that.overlay.setPosition(coords);
        map.addOverlay(that.overlay);
      }
    }
  },
  mounted() {
    this.init();
  }
};
</script>

<style lang="scss">
#map {
  position: absolute;
  top: 50px;
  left: 0;
  bottom: 0;
  right: 0;
}
</style>


