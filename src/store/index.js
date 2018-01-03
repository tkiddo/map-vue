import Vue from 'vue'
import Vuex from 'vuex'
import config from '../config/index'
Vue.use(Vuex);
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
const state = {
  zoom: config.map.zoom,
  map: null,
  draw: null,
  clickState: 'normal',
  drawLayer: [],
  markerLayer: new ol.layer.Vector(),
  markerFeatures: [],
  markerIcon: config.map.markerIcon,
  displayMarkerLayer: null,
  overlayShow: false,
  overlay: null,
  formShow:false,
  hotFeatureLayer:null,
  featuresOverlay:new ol.layer.Vector({
    zIndex:4,
    source: new ol.source.Vector()
  }),
  highLight:null,
  featureInfo:{},
  searchShow:false,
  searchResult:[],
  resultShow:false,
  totalNumber:0,
  loading:false,
  notice:'操作提示'
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
