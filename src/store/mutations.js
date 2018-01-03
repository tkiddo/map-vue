import * as types from './mutation-types.js'

export default {

  //获取地图
  [types.GET_MAP](state, payload) {
    state.map = payload
  },
  //改变标注图层
  [types.SET_DISPLAYMARKERLAYER](state, payload) {
    state.displayMarkerLayer = payload;
  },
  //改变鼠标点击状态
  [types.CHANGE_CLICKSTATE](state, payload) {
    state.clickState = payload;
  },
  //改变overlay状态
  [types.CHANGE_OVERLAYSTATE](state, payload) {
    state.overlayShow = payload;
  },
  //更新overlay
  [types.SET_OVERLAY](state, payload) {
    state.overlay = payload
  },
  //更新draw
  [types.SET_DRAW](state, payload) {
    state.draw = payload;
  },
  //更新markerFeatures
  [types.SET_MARKERFEATURES](state, payload) {
    state.markerFeatures = payload;
  },
  //改变form显示隐藏
  [types.CHANGE_FORMSHOW](state,payload){
    state.formShow = payload;
  },
  //清除所有图层
  [types.CLEAR](state,payload){
    let map = state.map;
    let markerLayer = state.markerLayer;
    if(markerLayer.getSource()){
        markerLayer.setSource(null);
        let arr = [];
        state.markerFeatures = arr;
    }
    let drawLayer = state.drawLayer;
    if(drawLayer.length>0){
        for(var i = 0;i<drawLayer.length;i++){
            map.removeLayer(drawLayer[i])
        }
    }
    if(state.draw){
      state.draw = null;
      map.removeInteraction(state.draw)
    }
    let displayMarkerLayer = state.displayMarkerLayer;
    if(displayMarkerLayer){
        displayMarkerLayer.setSource(null);
        map.removeLayer(displayMarkerLayer)
    }
    let overlay = state.overlay;
    if(overlay){
        map.removeLayer(overlay);
        state.overlayShow = false;
    }
    let hotFeatureLayer = state.hotFeatureLayer;
    if(hotFeatureLayer){
      map.removeLayer(hotFeatureLayer);
      state.hotFeatureLayer = null;
    }
  },
  //热区图层更新
  [types.SET_HOTFEATURELAYER](state,payload){
    state.hotFeatureLayer = payload;
  },
  //热区高亮图层
  [types.SET_FEATURESOVERLAY](state,payload){
    state.featuresOverlay = payload;
  },
  //高亮元素
  [types.CHANGE_HIGHLIGHT](state,payload){
    state.highLight = payload
  },
  //featureinfo 更新
  [types.UPDATE_FEATUREINFO](state,payload){
    state.featureInfo = payload
  },
  //搜索框
  [types.CHANGE_SEARCHSHOW](state,payload){
    state.searchShow = payload
  },
  //结果列表
  [types.CHANGE_RESULTSHOW](state,payload){
    state.resultShow = payload
  },
  //结果数据
  [types.UPDATE_RESULT](state,payload){
    state.searchResult = payload
  },
  //loading
  [types.CHANGE_LOADING](state,payload){
    state.loading = payload
  },
  //消息提示板
  [types.UPDATE_NOTICE](state,payload){
    state.notice = payload
  }


}
