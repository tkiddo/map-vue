<template>
  <div class="flex a-center nav">
      <div class='logo'>Map</div>
      <div class="wrapper fg" ref='wrapper'>
        <div class="tMenu flex a-center" ref="content" >
          <div v-for='(item,index) in items' class="menuItem" @click="expandMenu($event,item,index)" :key="index" >{{item.text}}
            <!-- <transition name = 'fade'>
              <div class="subMenu" v-show='item.subShow'>
                  <div class="subItem menuItem" v-for='subItem in item.children' @click.stop='interAction(item.operation,subItem.type)'>{{subItem.text}}</div>
              </div>
            </transition> -->
          </div>
        </div>
      </div>
      <transition name="fade">
        <div class="subMenu" ref='subMenu' v-show='subShow'>
          <div class="subItem menuItem" v-for='subItem in subMenu' @click.stop='interAction(operation,subItem.type)' :key="subItem.type">{{subItem.text}}</div>
        </div>
      </transition>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import * as types from "../store/mutation-types";
import config from "../config/index";
import axios from "axios";
import BScroll from "better-scroll";
import IScroll from "iscroll";
export default {
  data() {
    return {
      items: [
        {
          text: "缩放",
          subShow: false,
          operation: "changeZoom",
          notice:'地图放大缩小',
          children: [
            {
              text: "放大",
              type: "zoomIn"
            },
            {
              text: "缩小",
              type: "zoomOut"
            }
          ]
        },
        {
          text: "画图",
          subShow: false,
          operation: "draw",
          notice:'选择绘画形状，鼠标点击操作',
          children: [
            {
              text: "点",
              type: "Point"
            },
            {
              text: "线",
              type: "LineString"
            },
            {
              text: "面",
              type: "Polygon"
            },
            {
              text: "圆",
              type: "Circle"
            }
          ]
        },
        {
          text: "animate",
          subShow: false,
          operation: "animate",
          notice:'地图动态效果，定位切换',
          children: [
            {
              text: "顺时针",
              type: "rotate-right"
            },
            {
              text: "逆时针",
              type: "rotate-left"
            },
            {
              text: "平移",
              type: "pan"
            },
            {
              text: "弹",
              type: "elastic"
            },
            {
              text: "反弹",
              type: "bounce"
            },
            {
              text: "旋转",
              type: "spin"
            },
            {
              text: "飞行",
              type: "fly"
            }
          ]
        },
        {
          text: "标注",
          operation: "mark",
          subShow: false,
          notice:'鼠标点击在地图上打点',
          children: [
            {
              text: "显示",
              type: "display"
            },
            {
              text: "打点",
              type: "addMarker"
            }
          ]
        },
        {
          text: "测量",
          subShow: false,
          operation: "measure",
          notice:'暂未完善',
          children: [
            {
              text: "测距",
              type: "LineString"
            },
            {
              text: "测面",
              type: "Polygon"
            }
          ]
        },
        {
          text: "热区",
          subShow: false,
          operation: "hotArea",
          notice:'获取热区和自定义热区',
          children: [
            {
              text: "创建",
              type: "addHotArea"
            },
            {
              text: "获取",
              type: "getHotArea"
            }
          ]
        },
        {
          text: "清除",
          operation: "clear",
          notice:'清除所有图层'
        },
        {
          text: "热力图",
          operation: "heatMap",
          notice:'热力图显示'
        },
        {
          text: "搜索",
          operation:'search',
          notice:'搜索，未做判断'
        },
        {
          text: "轮子",
          operation:'components'
        },
        {
          text: "暂无"
        },
        {
          text: "暂无"
        },
        {
          text: "暂无"
        }
      ],
      subMenu: [],
      operation: "",
      subShow: false
    };
  },
  computed: {
    ...mapGetters([
      "clickState",
      "map",
      "drawLayer",
      "draw",
      "displayMarkerLayer",
      "markerLayer",
      "overlay",
      "hotFeatureLayer",
      "featuresOverlay",
      "highLight"
    ])
  },
  mounted() {
    this.initScroll();
  },
  methods: {
    initScroll() {
      let children = this.$refs.content.children;
      let pWidth = 100 * children.length;
      this.$refs.content.style.width = pWidth + "px";
      let that = this;
      let wrapper = this.$refs.wrapper;
      //获取元素宽度
      let wWidth = wrapper.getBoundingClientRect().width;
      this.$nextTick(() => {
        this.scroll = new BScroll(this.$refs.wrapper, {
          scrollX: true,
          scrollY: false,
          tap: true,
          click:true,
          probeType: 2
        });
        this.scroll.on("beforeScrollStart", () => {
          that.subShow = false;
        });
        this.scroll.on("scroll", obj => {
          that.subShow = false;
          that.changeClickState("scroll");
        });
        this.scroll.on("scrollEnd", () => {
          that.subShow = false;
          that.changeClickState("normal");
        });
      });
    },
    expandMenu(evt, item, index) {
      if (this.clickState != "scroll") {
        let rect = evt.currentTarget.getBoundingClientRect();
        let x = rect.left;
        let y = rect.top;
        if (item.text != "画图") {
          this.unDraw();
        }
        // if (item.text != "测量") {
        //   ol.measure.clear({ map: this.map });
        // }
        if (item.text == "清除") {
          this.clear();
          // ol.measure.clear({ map: this.map });
          this.changeClickState("normal");
        }
        if (item.text == "热力图") {
          this.$router.push({ path: "/heatmap" });
        }
        if(item.text == '搜索'){
          this.changeSearchShow(true)
        }
        if(item.text == '轮子'){
          this.$router.push({path:'/components'});
        }

        //   this.changeClickState(clickState)
        this.subMenu = this.items[index].children;
        this.operation = this.items[index].operation;
        this.subShow = true;
        let subMenu = this.$refs.subMenu;
        subMenu.style.left = x + "px";
        this.updateNotice(item.notice)
      }
    },
    interAction(operation, type) {
      let that = this;
      let map = that.map;
      switch (operation) {
        case "changeZoom":
          that.changeZoom(type);
          break;
        case "draw":
          //map.removeInteraction(ol.interaction.DragPan)
          that.onDraw(type);
          break;
        case "animate":
          that.animate(type);
          break;
        case "mark":
          if (type == "display") {
            that.displayMarker();
          } else if (type == "addMarker") {
            that.changeClickState(type);
          }
          break;
        case "measure":
          that.changeClickState("measure");
          // ol.measure.start({ map, type });
          break;
        case "hotArea":
          if (type == "addHotArea") {
            that.changeFormShow(true);
          } else if (type == "getHotArea") {
            that.clear();
            that.getHotArea();
          }

          break;
      }
    },
    changeZoom(payload) {
      let that = this;
      let map = that.map;
      let zoom = map.getView().getZoom();
      if (payload == "zoomIn") {
        map.getView().setZoom(zoom + 1);
      } else if (payload == "zoomOut") {
        map.getView().setZoom(zoom - 1);
      }
    },
    onDraw(payload) {
      let that = this;
      that.changeClickState("draw");
      let draw = that.draw;
      let map = that.map;
      let type = payload;
      let source = new ol.source.Vector({ wrapX: false });
      let vector = new ol.layer.Vector({ source });
      if (draw) {
        map.removeInteraction(draw);
      }
      let newDraw = new ol.interaction.Draw({
        source,
        type
      });
      that.setDraw(newDraw);
      that.drawLayer.push(vector);
      map.addLayer(vector);
      map.addInteraction(that.draw);
    },
    unDraw() {
      let map = this.map;
      let draw = this.draw;
      if (draw) {
        map.removeInteraction(draw);
        this.setDraw(null);
      }
      this.changeClickState("normal");
    },
    animate(payload) {
      function bounce(t) {
        let s = 7.5625,
          p = 2.75,
          l;
        if (t < 1 / p) {
          l = s * t * t;
        } else {
          if (t < 2 / p) {
            t -= 1.5 / p;
            l = s * t * t + 0.75;
          } else {
            if (t < 2.5 / p) {
              t -= 2.25 / p;
              l = s * t * t + 0.9375;
            } else {
              t -= 2.625 / p;
              l = s * t * t + 0.984375;
            }
          }
        }
        return l;
      }

      function elastic(t) {
        return (
          Math.pow(2, -10 * t) * Math.sin((t - 0.075) * (2 * Math.PI) / 0.3) + 1
        );
      }

      function flyTo(location, done) {
        let duration = 2000;
        let zoom = view.getZoom();
        let parts = 2;
        let called = false;
        function callback(complete) {
          --parts;
          if (called) {
            return;
          }
          if (parts === 0 || !complete) {
            called = true;
            done(complete);
          }
        }
        view.animate(
          {
            center: location,
            duration: duration
          },
          callback
        );
        view.animate(
          {
            zoom: zoom - 1,
            duration: duration / 2
          },
          {
            zoom: zoom,
            duration: duration / 2
          },
          callback
        );
      }
      let that = this;
      let map = that.map;
      let type = payload;
      let view = map.getView();
      let center = map.getView().getCenter();
      switch (type) {
        case "rotate-left":
          view.animate({
            rotation: view.getRotation() + Math.PI / 2
          });
          break;
        case "rotate-right":
          view.animate({
            rotation: view.getRotation() - Math.PI / 2
          });
          break;
        case "pan":
          center = ol.proj.transform(
            [119.208392, 42.151029],
            "EPSG:4326",
            "EPSG:3857"
          );
          view.animate({
            center,
            duration: 2000
          });
          break;
        case "elastic":
          center = ol.proj.transform(
            [119.208392, 42.051029],
            "EPSG:4326",
            "EPSG:3857"
          );
          view.animate({
            center,
            duration: 2000,
            easing: elastic
          });
          break;
        case "bounce":
          center = ol.proj.transform(
            [119.008392, 41.951029],
            "EPSG:4326",
            "EPSG:3857"
          );
          view.animate({
            center,
            duration: 2000,
            easing: bounce
          });
          break;
        case "spin":
          let rome = ol.proj.transform(
            [119.108392, 41.951029],
            "EPSG:4326",
            "EPSG:3857"
          );
          view.animate(
            {
              center: [
                center[0] + (rome[0] - center[0]) / 2,
                center[1] + (rome[1] - center[1]) / 2
              ],
              rotation: Math.PI,
              easing: ol.easing.easeIn
            },
            {
              center: rome,
              rotation: 2 * Math.PI,
              easing: ol.easing.easeOut
            }
          );
          break;
        case "fly":
          center = ol.proj.transform(
            [118.908392, 41.951029],
            "EPSG:4326",
            "EPSG:3857"
          );
          flyTo(center, function() {});
          break;
      }
    },
    displayMarker() {
      let that = this;
      that.changeClickState("featureInfo");
      let map = that.map;
      let center = map.getView().getCenter();
      let feature = new ol.Feature({
        geometry: new ol.geom.Point(center),
        type: "marker",
        name: "标记一"
      });
      feature.setStyle(
        new ol.style.Style({
          image: new ol.style.Icon({
            crossOrigin: "anonymous",
            src: config.api.imgApi + "/static/images/marker.png"
          })
        })
      );
      let center2 = ol.proj.transform(
        [118.9545196, 42.2575427],
        "EPSG:4326",
        "EPSG:3857"
      );
      let feature2 = new ol.Feature({
        geometry: new ol.geom.Point(center2),
        type: "marker",
        name: "标记二"
      });
      feature2.setStyle(
        new ol.style.Style({
          image: new ol.style.Icon({
            crossOrigin: "anonymous",
            src: config.api.imgApi + "/static/images/light.png"
          })
        })
      );
      let vectorSource = new ol.source.Vector({
        features: [feature, feature2]
      });
      let displayMarkerLayer = new ol.layer.Vector({
        source: vectorSource
      });
      that.setDisplayMarkerLayer(displayMarkerLayer);
      map.addLayer(that.displayMarkerLayer);
    },
    getHotArea() {
      let that = this;
      axios
        .get(config.api.webApi + "/hotArea")
        .then(res => {
          this.displayHotArea(res.data.data);
        })
        .catch(err => {
          console.log(err);
        });
    },
    displayHotArea(data) {
      this.changeClickState("featureInfo");
      this.drawFeatures(data);
      let map = this.map;
      let style = new ol.style.Style({
        fill: new ol.style.Fill({
          color: "rgba(114,156,87,0.5)"
        }),
        stroke: new ol.style.Stroke({
          color: "purple"
        }),
        text: new ol.style.Text({
          font: "12px Calibri,sans-serif",
          fill: new ol.style.Fill({
            color: "#000"
          }),
          stroke: new ol.style.Stroke({
            color: "#fff",
            width: 3
          })
        })
      });
      this.featuresOverlay.setStyle(style);
      map.on("pointermove", evt => {
        let map = this.map;
        let featuresOverlay = this.featuresOverlay;
        if (evt.dragging) {
          return;
        }
        let pixel = map.getEventPixel(evt.originalEvent);
        this.dispalyFeatureHightLight(featuresOverlay, pixel);
      });
    },
    drawFeatures(data) {
      let map = this.map;
      if (this.hotFeatureLayer) {
        map.removeLayer(this.hotFeatureLayer);
      }
      let features = [];
      let style = new ol.style.Style({
        stroke: new ol.style.Stroke({
          color: "skyblue",
          width: 3
        }),
        fill: new ol.style.Fill({
          color: "rgba(152,255,114,0.5)"
        })
      });
      data.forEach(el => {
        let feature = new ol.Feature({
          name: el.name,
          geometry: new ol.format.WKT().readGeometry(el.geom),
          type: "热区"
        });
        features.push(feature);
      });
      let source = new ol.source.Vector({
        features
      });
      let vector = new ol.layer.Vector({
        source,
        style
      });
      this.setHotFeatureLayer(vector);
      map.addLayer(vector);
    },
    dispalyFeatureHightLight(Overlay, pixel) {
      let map = this.map;
      let highlight = this.highLight;
      let feature = map.forEachFeatureAtPixel(pixel, function(feature, layer) {
        return feature;
      });

      if (Overlay) {
        if (feature !== highlight) {
          if (highlight) {
            Overlay.getSource().removeFeature(highlight);
          }
          if (feature) {
            //debugger;
            Overlay.getSource().clear(true);
            Overlay.getSource().addFeature(feature);
            if (Overlay.getStyle().getText()) {
              Overlay.getStyle()
                .getText()
                .setText(feature.get("name"));
            }
          }
          this.changeHighLight(feature);
        }
      }
    },
    ...mapActions([
      "changeClickState",
      "setDraw",
      "setDisplayMarkerLayer",
      "changeOverlayState",
      "setMarkerFeatures",
      "changeFormShow",
      "clear",
      "setHotFeatureLayer",
      "setFeaturesOverlay",
      "changeHighLight",
      'changeSearchShow',
      'updateNotice'
    ])
  }
};
</script>

<style lang="scss">
.tMenu {
  height: 47px;
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.1), 0 1px rgba(0, 0, 0, 0.1);

  // transform: none !important;
  .menuItem {
    width: 100px;
    border-left: 1px solid #fff;
    text-align: center;
    color: #fff;
    cursor: pointer;
    &:hover {
      color: darkgoldenrod;
    }
  }
}
.subMenu {
  width: 100px;
  height: auto;
  text-align: center;
  background: #333;
  position: absolute;
  top: 47px;
  left: 0;
  z-index: 1111;
  border-radius: 0 0 5px 5px;
  .subItem {
    width: 100%;
    text-align: center;
    padding: 8px 0;
    color: #fff;
    cursor: pointer;
    &:hover {
      color: darkgoldenrod;
    }
  }
}
.nav {
  width: 100%;
  height: 47px;
  background: #333;
  .wrapper {
    overflow: hidden;
    height: 47px;
  }
}
.logo {
  padding: 0 30px;
  color: orange;
  font-size: 20px;
  cursor: pointer;
  height: 100%;
  line-height: 47px;
}
</style>


