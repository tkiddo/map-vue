<template>
<el-form ref="form" :model="form" label-width="80px" class='form' label-position = 'left' v-show='formShow'>
  <h3>新建热区</h3>
  <el-form-item label="名称">
    <el-input v-model="form.name"></el-input>
  </el-form-item>
  <el-form-item label="类型">
    <el-select v-model="form.type" placeholder="请选择类型" style='width:100%;'>
      <el-option label="线" value="1"></el-option>
      <el-option label="面" value="2"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="描述">
    <el-input v-model="form.description"></el-input>
  </el-form-item>
  <el-form-item label="坐标串">
    <el-input v-model="form.coordinates" @focus="onDraw(form.type)"></el-input>
  </el-form-item>
  <el-form-item style="margin:0 auto">
    <el-button type="primary" @click="onSubmit">立即创建</el-button>
    <el-button @click='cancel'>取消</el-button>
  </el-form-item>
</el-form>
</template>



<script>
import {mapActions,mapGetters} from 'vuex'
import axios from 'axios'
import config from '../config'
  export default {
    data() {
      return {
        form: {
          name: '',
          description:'',
          coordinates:'',
          type:'',
          geom:''
        }
      }
    },
    computed:{
        ...mapGetters([
            'formShow',
            'draw',
            'drawLayer',
            'map'
        ])
    },
    methods: {
      onSubmit() {
        axios.post(config.api.webApi + '/hotArea',this.form).then((res)=>{
            this.$message({
                type:'success',
                message:'操作成功!'
            });
            this.changeFormShow(false)
        }).catch((err)=>{
            console.log(err)
        })
      },
      cancel(){
          this.clear();
          this.unDraw();
          this.changeFormShow(false);
      },
      onDraw(type){
          
          if(type == ''){
              this.$message({
                  type:'warning',
                  message:'请选择类型!'
              });
              return
          }
          let map = this.map;
          this.changeClickState('draw')
          this.clear();
          this.changeFormShow(false);
          let fillColor = 'rgba(255,255,255,0.5)';
          let strokeColor = '#df3434';
          let source = new ol.source.Vector();
          let style = new ol.style.Style({
                fill:new ol.style.Fill({
                    color:fillColor
                }),
                stroke:new ol.style.Stroke({
                    color:strokeColor,
                    width:3
                })
            });
          let vectorLayer = new ol.layer.Vector({
              source,
              style
          });
          let ttype = type=='1'?'LineString':'Polygon';
          let draw = new ol.interaction.Draw({
              source,
              style,
              type:ttype
          });
          let that = this;
          this.setDraw(draw);
          this.drawLayer.push(vectorLayer);
          map.addLayer(vectorLayer);
          map.addInteraction(this.draw);
          this.draw.on('drawend',(obj)=>{
              let coordsGeometry = new ol.format.WKT().writeGeometry(obj.feature.getGeometry());
              let coords = obj.feature.getGeometry().getCoordinates().join(',');
              that.form.coordinates = coords;
              that.form.geom = coordsGeometry;
              that.changeFormShow(true);
              that.unDraw()
          })
          
          
      },
      unDraw() {
      let map = this.map;
      let draw = this.draw;
      if (draw) {
        map.removeInteraction(draw);
        this.setDraw(null);
      }
      this.changeClickState('normal')
    },
      ...mapActions([
          'changeFormShow',
          'clear',
          'setDraw',
          'changeClickState'
      ])

    }
  }
</script>

<style lang="scss">
.form{
    width:550px;
    height: 380px;
    border-radius: 10px;
    padding:15px 40px;
    position: absolute;
    background: #fff;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1111;
    h3{
        text-align: center;
        padding:15px;
        color:#666;
        letter-spacing: 5px;
    }
}
</style>

