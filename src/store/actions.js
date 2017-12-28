import * as types from './mutation-types'
import axios from 'axios'
import config from '../config'
export default {
  getMap({
    commit,
    state
  }, payload) {
    commit(types.GET_MAP, payload)
  },
  setDisplayMarkerLayer({
    commit,
    state
  }, payload) {
    commit(types.SET_DISPLAYMARKERLAYER, payload)
  },
  changeClickState({
    commit,
    state
  }, payload) {
    commit(types.CHANGE_CLICKSTATE, payload)
  },
  changeOverlayState({
    commit,
    state
  }, payload) {
    commit(types.CHANGE_OVERLAYSTATE, payload)
  },
  setOverlay({
    commit,
    state
  }, payload) {
    commit(types.SET_OVERLAY, payload)
  },
  setDraw({
    commit,
    state
  }, payload) {
    commit(types.SET_DRAW, payload)
  },
  setMarkerFeatures({
    commit,
    state
  }, payload) {
    commit(types.SET_MARKERFEATURES, payload)
  },
  changeFormShow({
    commit,
    state
  },payload){
    commit(types.CHANGE_FORMSHOW,payload)
  },
  clear({
    commit,
    state
  },payload){
    commit(types.CLEAR)
  },
  setHotFeatureLayer({
    commit,
    state
  },payload){
    commit(types.SET_HOTFEATURELAYER,payload)
  },
  setFeaturesOverlay({
    commit,
    state
  },payload){
    commit(types.SET_FEATURESOVERLAY,payload)
  },
  changeHighLight({
    commit,
    state
  },payload){
    commit(types.CHANGE_HIGHLIGHT,payload)
  },
  updateFeatureInfo({
    commit,
    state
  },payload){
    commit(types.UPDATE_FEATUREINFO,payload)
  },
  changeSearchShow({
    commit,
    state
  },payload){
    commit(types.CHANGE_SEARCHSHOW,payload)
  },
  changeResultShow({
    commit,
    state
  },payload){
    commit(types.CHANGE_RESULTSHOW,payload)
  },
  updateResult({
    commit,
    state
  },payload){
    let page = payload.page || 1;
    axios
    .get(config.api.webApi+'/list?page='+page)
    .then(res=>{
      commit(types.UPDATE_RESULT,res.data);
      commit(types.CHANGE_LOADING,false)
    })
    .catch(err=>{
      console.log(err)
    })
  },
  changeLoading({
    commit,
    state
  },payload){
    commit(types.CHANGE_LOADING,payload)
  }
}
