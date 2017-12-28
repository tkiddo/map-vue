<template>
  <div id="heatmap" class="map"></div>
</template>

<script>
import config from '../config'
export default {
  methods: {
    init() {
      var heatData = {
        type: "FeatureCollection",
        features: [
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-2.9667, 56.466702]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-4.856786, 55.736744]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [14.7167, 55.116699]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [69.216698, 54.883301]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-1.1667, 54.599998]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [18.549999, 54.533298]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [11.4167, 53.633301]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [8.5833, 53.549999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [4.1333, 51.950001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [2.35, 51.049999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-1.4, 50.899998]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-1.3333, 50.8167]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [106.199997, 50.25]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [82.599998, 50.0]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [106.176331, 49.902462]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-1.6333, 49.650002]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [21.25, 48.700001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-4.5, 48.383301]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-100.783302, 46.799999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [96.239334, 46.327366]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [14.4333, 45.333302]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-65.967369, 45.242485]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-100.349998, 44.366699]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-116.216698, 43.616699]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [104.5, 43.450001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [20.4333, 41.6833]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [25.4167, 41.133301]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [16.866699, 41.099998]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-74.011223, 40.66396]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [20.6833, 40.333302]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-75.369164, 39.869167]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [69.0, 39.75]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [23.688377, 37.956287]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-122.271477, 37.810452]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-25.692211, 37.7463]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-2.965954, 35.316483]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [70.466698, 34.4333]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [35.416698, 33.583302]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [35.450001, 33.383301]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [68.416702, 32.849998]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [35.0, 32.766701]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [35.283298, 32.700001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [36.233299, 32.283298]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [36.0667, 32.083302]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [34.866699, 31.9167]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [37.333302, 31.3333]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [34.799999, 31.25]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [33.799999, 31.133301]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [41.033298, 30.983299]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [35.599998, 30.833334]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-88.116699, 30.6833]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [40.133301, 30.0]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-94.783302, 29.3167]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [82.216698, 29.25]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [33.223736, 28.807247]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-16.25, 28.4667]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [36.599998, 28.383301]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [33.616699, 28.233299]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-15.4167, 28.15]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [41.75, 27.4667]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [44.133301, 26.3333]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [50.083302, 26.3333]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [92.733299, 23.6667]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [108.349998, 21.75]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [106.333031, 20.4503]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [72.849998, 20.416367]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-70.177391, 18.23838]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-76.800003, 18.0333]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [44.133301, 17.483299]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [104.716698, 17.383301]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [42.570965, 16.848522]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-16.0833, 15.75]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [99.516701, 14.0333]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-61.0, 14.0167]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-88.933296, 13.7167]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-81.690331, 12.56214]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-84.833298, 11.2]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [39.6833, 11.0833]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-64.633301, 10.2327]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [42.133301, 9.3]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [47.3167, 8.4333]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [171.367661, 7.12098]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [158.216705, 6.9667]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-55.200001, 5.6]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [103.466698, 4.25]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [103.333298, 3.8]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [172.921112, 1.340754]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [179.221893, -8.536503]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [31.15, -10.2667]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [105.716698, -10.4167]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [45.283298, -12.7833]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [15.7833, -17.049999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [32.666698, -18.9667]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [29.75, -19.4667]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [55.450001, -20.866699]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [31.5, -21.0]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [32.086277, -28.783966]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-57.950001, -34.916698]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [15.66, 78.199997]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-69.345001, 77.483002]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [128.75, 71.699997]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-22.996323, 70.528572]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [29.750999, 70.082001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [18.954, 69.667]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [88.099998, 69.330002]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [33.085999, 68.963997]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [17.299999, 68.349998]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [133.410004, 67.580002]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [14.334249, 67.240807]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [66.580002, 66.57]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [25.690001, 66.490997]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-37.707764, 65.633026]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [22.219999, 65.579002]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [25.334999, 64.973]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-147.651184, 64.838745]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-165.270004, 64.586281]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [40.64616, 64.520668]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-51.580002, 64.271187]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [11.499, 64.014]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [20.252001, 63.824001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [10.412, 63.416]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [14.65, 63.1833]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [21.608999, 63.094002]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [27.691999, 62.893002]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [7.164, 62.736]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [29.778999, 62.598]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-114.350998, 62.456001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [25.747999, 62.244999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-6.77, 62.021]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [129.830002, 62.009998]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [27.285, 61.689999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [50.766666, 61.666668]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [6.85, 61.1833]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [10.482, 61.119999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [24.472, 60.997002]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [26.709, 60.875999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [11.069, 60.82]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-135.044006, 60.726002]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [17.183001, 60.679001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [6.441, 60.630001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [15.647, 60.612999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [22.259001, 60.449001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [5.490678, 60.349998]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [24.9767, 60.196423]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-149.449997, 60.119999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [19.948999, 60.097]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [10.712, 59.938]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [30.25, 59.916668]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [11.347233, 59.913483]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [17.646999, 59.854]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [150.833298, 59.633301]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [16.559, 59.617001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [10.669, 59.432999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [24.75, 59.416668]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [13.511, 59.388]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [143.247421, 59.382744]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [15.229, 59.279999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [10.421, 59.264]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [39.876999, 59.227001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [9.615, 59.207001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [5.695969, 58.973343]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [17.014999, 58.764]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-94.131897, 58.748466]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [13.828, 58.705002]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [49.700001, 58.633331]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [31.278999, 58.549]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [8.765999, 58.464756]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [12.33, 58.362999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-134.404007, 58.303001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [7.928, 58.201]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [56.232464, 58.000237]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [28.346001, 57.817001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [40.945, 57.761002]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [11.793, 57.741001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [18.299999, 57.634998]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [39.858002, 57.606998]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [65.533333, 57.150002]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [9.932, 57.035]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [41.02, 57.012001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [14.822, 56.883999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [24.049999, 56.880001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [35.916668, 56.866669]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [53.233334, 56.849998]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [60.61013, 56.846542]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [16.368999, 56.667]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [12.855, 56.661999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [47.866669, 56.633331]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [84.971001, 56.478001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [9.417, 56.452999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [43.94067, 56.289677]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [15.296, 56.202999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [10.212777, 56.154812]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [47.25, 56.150002]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [40.374001, 56.146999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [8.254, 56.084]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [14.166, 56.028999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [92.833336, 56.016666]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [12.3167, 55.9333]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-3.25, 55.924]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-4.269948, 55.862808]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [37.700001, 55.75]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [49.145466, 55.733006]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [9.535, 55.709]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [12.1167, 55.650002]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [13.023, 55.596001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [65.333, 55.438999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [11.5667, 55.432999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [10.392, 55.398998]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [86.054001, 55.384998]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [8.7833, 55.333302]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [30.221001, 55.198002]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [61.393002, 55.145]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [73.25, 55.063]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [9.414, 55.048]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [82.943001, 55.032001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [56.096001, 54.821999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [32.036999, 54.789001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [11.872, 54.772999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [20.503, 54.708]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [25.275967, 54.688568]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [39.705002, 54.598999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-5.91, 54.587002]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [36.278, 54.523998]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [17.033001, 54.462002]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [18.625, 54.366001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [10.121, 54.325001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [48.362, 54.305]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [37.609001, 54.210999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [16.184999, 54.186001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [45.167, 54.186001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [19.405001, 54.159]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-4.479178, 54.151928]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [22.940001, 54.103001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [30.341999, 53.910999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [27.575567, 53.899937]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-1.497527, 53.808712]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [20.492001, 53.778]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [91.443001, 53.719002]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [87.169998, 53.700001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [23.841, 53.672001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [10.028, 53.570999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-113.508003, 53.556]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-2.261779, 53.479664]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [14.531, 53.438]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-1.462989, 53.374043]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [83.75, 53.349998]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-6.257347, 53.34156]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [69.403, 53.273998]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-9.065, 53.271]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [34.448002, 53.257]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [6.575, 53.219002]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [63.610001, 53.202]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [50.150002, 53.200001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [158.720001, 53.200001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [5.787, 53.199001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [45.002998, 53.196999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [22.080999, 53.172001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [16.745001, 53.145]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [23.159, 53.130001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [18.028999, 53.112]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [8.858, 53.080002]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [21.568001, 53.080002]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [18.611, 53.011002]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [6.55, 53.0]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [36.091999, 52.994999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [20.622, 52.882]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [15.236, 52.736]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [41.417, 52.722]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [19.066999, 52.646999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [39.66, 52.618999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [19.691999, 52.544998]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [6.097, 52.523998]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [13.327573, 52.516273]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-1.863348, 52.492752]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [30.98, 52.444]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [16.886999, 52.396]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [12.92, 52.395]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [4.632, 52.387001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [9.729, 52.386002]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [4.894833, 52.373043]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [104.248001, 52.317001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [76.962997, 52.282001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [21.011879, 52.244946]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [18.252001, 52.200001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [22.278999, 52.167999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [11.609, 52.130001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-106.629997, 52.110001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [5.112, 52.099998]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [23.702999, 52.096001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [4.281, 52.076]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [113.499001, 52.044998]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [23.127001, 52.029999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [5.923, 51.987999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [20.142, 51.959999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [85.967003, 51.953999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [15.492, 51.942001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [4.485152, 51.925594]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-8.491, 51.897999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [107.565002, 51.846001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [16.566, 51.844002]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [55.106998, 51.782001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [19.476, 51.778]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [18.083, 51.757999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [36.174, 51.742001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [39.269001, 51.715]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [94.386002, 51.709999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [5.316667, 51.683334]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [18.733, 51.596001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [7.466418, 51.513813]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [31.312, 51.504002]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [3.61, 51.501999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [45.952999, 51.491001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [6.775304, 51.489338]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-0.177998, 51.487911]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-3.216667, 51.483334]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [19.691, 51.409]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [21.158001, 51.396]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [7.122435, 51.354042]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [12.398074, 51.349331]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-80.730003, 51.330002]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [22.577999, 51.242001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [6.798, 51.241001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [51.355999, 51.223]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [3.22, 51.209999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [4.426, 51.207001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [16.158001, 51.207001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [71.431999, 51.188999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [23.496, 51.132999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [17.038, 51.122002]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [3.736, 51.048]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [13.705, 51.046001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-114.050003, 51.029999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [11.036, 50.976002]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [5.484, 50.964001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [34.833302, 50.950001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [6.934872, 50.942345]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [15.727, 50.900002]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [20.632, 50.873001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [5.677, 50.853001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [19.118999, 50.810001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [16.287001, 50.749001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [7.099819, 50.734558]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [25.333334, 50.733334]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [23.26, 50.726002]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [17.927999, 50.669998]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [26.1667, 50.666698]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [14.081, 50.662998]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [3.063, 50.632]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [5.569, 50.623001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [36.610001, 50.597]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [21.68, 50.581001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [4.868, 50.465]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [30.502111, 50.448158]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-104.615997, 50.448002]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [3.939, 50.445999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [80.236, 50.417]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [110.75, 50.330002]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [127.533333, 50.283333]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-66.402542, 50.282547]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [57.230999, 50.271]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [19.0, 50.266666]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [28.663, 50.251999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [15.812, 50.206001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [8.668167, 50.129997]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [14.457, 50.105999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [8.241, 50.074001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [19.945, 50.062]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [22.016001, 50.043999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [20.993, 50.007]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [8.249, 50.001999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [36.208313, 49.989674]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [92.069, 49.984001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-97.124001, 49.921001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [2.302, 49.888]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [6.1667, 49.883301]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [73.202637, 49.879208]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [24.034521, 49.837311]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [19.052999, 49.820999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [18.261999, 49.819]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [22.778999, 49.790001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [13.384, 49.745998]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [6.3333, 49.700001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [21.754999, 49.691002]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [5.8167, 49.6833]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [100.157997, 49.637001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [63.499001, 49.625999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [20.702, 49.623001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [6.12, 49.608002]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [34.550999, 49.592999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [25.604, 49.550999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-2.5333, 49.450001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [32.081001, 49.444]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [1.077, 49.431999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [26.999001, 49.417]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [0.22, 49.32402]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-122.963066, 49.2743]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [7.045, 49.271999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [4.03, 49.237999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [28.482, 49.233002]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [16.615999, 49.202999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-2.1, 49.1833]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-0.337, 49.174999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [14.478, 48.973999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [89.967003, 48.962002]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [24.716667, 48.916668]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [2.433, 48.882]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [103.555, 48.813999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [9.182, 48.790001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [19.15, 48.720001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [44.484001, 48.709999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [6.178, 48.686001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [39.25, 48.633301]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [7.768, 48.583]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [32.264999, 48.507999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-123.371002, 48.444]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [135.126999, 48.431999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [35.138, 48.423]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [14.294, 48.298]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [25.945, 48.282001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [17.129999, 48.150002]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [11.542953, 48.140976]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-1.677, 48.118999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [19.826, 48.105]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [20.799999, 48.105]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [114.505997, 48.060001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [37.737053, 48.040146]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [91.636002, 48.005001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [21.722, 47.957001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [106.912003, 47.929001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [1.906, 47.914001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [20.382999, 47.895]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [35.157001, 47.854]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [16.5333, 47.833302]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [97.0, 47.810001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [13.052, 47.807999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [22.885, 47.792]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [67.709999, 47.780998]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [26.667, 47.745998]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [106.946999, 47.710999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [8.633, 47.706001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [17.638, 47.678001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [23.591, 47.653999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [26.316668, 47.650002]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-122.31665, 47.588554]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [9.108, 47.568001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-52.734001, 47.564999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [18.433001, 47.549999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [7.576, 47.547001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [21.641001, 47.532001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [9.7667, 47.516701]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [19.094, 47.514999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [7.737, 47.483002]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [101.458, 47.458]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [9.362, 47.423]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [8.534, 47.401001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [8.034, 47.389999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [9.2833, 47.383301]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [7.345, 47.369999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [123.964966, 47.344006]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [9.4167, 47.333302]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [110.661003, 47.330002]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [5.036, 47.318001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [11.35, 47.264999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [6.018, 47.248001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [16.622, 47.236]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [39.688, 47.231998]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-1.562, 47.219002]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [7.537, 47.212002]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [18.41, 47.191002]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [8.487, 47.179001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [23.063, 47.174999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [20.188, 47.169998]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [27.584, 47.169998]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [9.521, 47.143002]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [24.513, 47.138]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [51.933334, 47.116669]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [17.910999, 47.091]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [15.431, 47.064999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [8.303, 47.057999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [21.941999, 47.057999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [9.0667, 47.049999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-122.891998, 47.043999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [8.648, 47.02]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [28.83, 47.0]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [6.923, 46.999001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [32.0, 46.966702]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [142.75, 46.959999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [8.3833, 46.950001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [7.446, 46.948002]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [26.382999, 46.939999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [19.693001, 46.905998]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [8.243, 46.898998]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [8.638, 46.879002]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [9.535, 46.856998]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [16.84, 46.844002]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-71.245003, 46.801998]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [7.15, 46.799999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-56.194, 46.785999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [23.6, 46.777]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [113.279999, 46.679001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [21.101, 46.672001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [27.733334, 46.633331]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [14.304, 46.618]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-112.035004, 46.596001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [0.34, 46.584999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [26.924999, 46.570999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [24.566999, 46.542999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [32.541, 46.537998]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [6.623, 46.525002]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [30.733334, 46.466667]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [17.794001, 46.361]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [25.524, 46.361]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [18.712999, 46.344002]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [102.772003, 46.268002]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [20.157, 46.256001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [48.0, 46.25]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-63.139442, 46.240608]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [7.354, 46.238998]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [6.134, 46.202]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [9.02, 46.196999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [21.326, 46.189999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [23.58, 46.077]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [18.225, 46.075001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [14.639612, 46.068302]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [11.12, 46.068001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-66.656998, 45.945]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [22.916668, 45.883331]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [25.792999, 45.868]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [1.252, 45.831001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [15.964, 45.806999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [24.143, 45.786999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [3.091, 45.784]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [106.264999, 45.761002]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [21.238001, 45.756001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [126.623001, 45.755001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [4.855, 45.747002]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [7.315, 45.737]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [27.188999, 45.701]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [25.611, 45.655998]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [13.777, 45.645]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-73.653534, 45.541016]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [9.19, 45.473]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-122.641678, 45.442131]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [28.049999, 45.433334]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [12.37072, 45.424774]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-75.651001, 45.374001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [27.969, 45.292]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [21.892, 45.291]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [28.806, 45.18]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [26.823, 45.147999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [24.382999, 45.110001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [7.666426, 45.074875]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [41.963001, 45.058998]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [23.274, 45.044998]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-93.065002, 45.021]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [78.377998, 45.013]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-122.990997, 44.956001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [25.459, 44.938]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [26.037001, 44.936001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-93.307793, 44.924187]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [110.116997, 44.884998]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [65.483002, 44.867001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [24.882999, 44.854]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-0.599, 44.841]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-63.651001, 44.68]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [22.656, 44.638]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [40.088001, 44.603001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [27.382, 44.57]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [11.334, 44.502998]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [24.371, 44.435001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [26.122976, 44.430485]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [8.883, 44.412998]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [23.813, 44.325001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-69.772003, 44.320999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-72.580002, 44.262001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [27.410999, 44.203999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [28.631001, 44.132999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [25.84, 43.93]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [12.466667, 43.916668]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [25.286711, 43.901623]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [125.313004, 43.881001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [18.43, 43.869999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [126.567062, 43.850216]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [87.586998, 43.783001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [11.207746, 43.781574]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [7.424, 43.744999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-79.412636, 43.720768]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [13.516, 43.620998]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [3.867, 43.613998]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [1.438, 43.599998]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [26.535999, 43.534]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [43.285999, 43.481998]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-3.800538, 43.462612]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [23.237, 43.414001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-5.847, 43.368999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [45.683998, 43.311001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [5.385, 43.285]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [76.912628, 43.255062]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-77.635612, 43.210464]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-71.543999, 43.206001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [27.907, 43.206001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [24.719, 43.138]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [131.960434, 43.130001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [12.385, 43.112999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-87.990738, 43.067947]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-89.400002, 43.066666]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [141.345993, 43.055]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [44.666668, 43.049999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [40.988998, 43.007]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [47.511002, 42.976002]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-78.848434, 42.898663]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-8.541, 42.880001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [74.769997, 42.880001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-1.653, 42.813]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-84.557999, 42.726002]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-73.768997, 42.659]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [27.464001, 42.528]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [72.237, 42.514999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [1.516667, 42.5]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [78.389999, 42.48]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [59.616699, 42.466702]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-2.446, 42.466]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-83.078926, 42.394314]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-71.102997, 42.375]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [13.410811, 42.35944]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [20.0833, 42.333302]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [69.572998, 42.303001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [20.434, 42.083]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [19.528, 42.074001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [19.883301, 42.033298]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [35.153, 42.022999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [21.433332, 41.983334]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [8.662, 41.960999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [25.568001, 41.936001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [12.52, 41.880001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [123.905998, 41.859001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [59.957001, 41.834]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-87.641304, 41.826546]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-71.426003, 41.816002]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-6.755, 41.807999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [123.383057, 41.802162]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [19.653999, 41.787998]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [129.783997, 41.784]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [19.8167, 41.783298]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-72.703003, 41.759998]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [27.226, 41.743]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [44.783127, 41.721809]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-8.844134, 41.696239]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [26.562, 41.681999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-0.878, 41.651001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-4.721, 41.650002]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [41.633331, 41.633331]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [20.016001, 41.625999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-93.622002, 41.598]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [60.6833, 41.583302]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [14.656, 41.563]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-8.427, 41.544998]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [19.797001, 41.519001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [31.799, 41.456001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [75.998001, 41.424999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-81.727509, 41.390717]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [128.168793, 41.389812]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [33.783001, 41.389]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [2.159, 41.358002]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [19.832001, 41.332001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [19.454, 41.327]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-7.737, 41.293999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [36.331001, 41.292999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [69.349869, 41.247932]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [20.366699, 41.200001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [41.818001, 41.182999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-8.585, 41.166]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-104.814003, 41.133999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [20.093, 41.117001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [122.977013, 41.115246]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [29.006001, 41.066002]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [40.522999, 41.02]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [39.717999, 41.000999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [71.68, 40.999001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [27.516666, 40.984692]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [37.875999, 40.984001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [126.596001, 40.969002]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [19.716, 40.939999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [38.389999, 40.912998]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [20.664, 40.900002]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [20.200001, 40.866699]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [14.250025, 40.833366]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [140.75, 40.816666]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [111.649002, 40.813999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-96.681999, 40.806999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [72.345001, 40.793999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [29.923, 40.773998]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [30.4, 40.766666]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [31.612, 40.738998]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [19.573, 40.73]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-74.199997, 40.720001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [19.972, 40.709999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-73.905235, 40.707859]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-111.891998, 40.693001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-7.91, 40.657001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [35.834999, 40.650002]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [15.799, 40.641998]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-8.651, 40.640999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [22.799999, 40.630001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [20.766666, 40.616669]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [33.620998, 40.606998]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [43.077999, 40.592999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [34.964001, 40.554001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-7.262, 40.541]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [72.799004, 40.523998]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [20.233299, 40.516701]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [68.783302, 40.516701]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-79.997086, 40.497204]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [19.49, 40.472]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [39.484001, 40.464001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-3.690969, 40.442219]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [71.786003, 40.386002]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [23.452999, 40.381001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [49.816002, 40.324001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [36.563, 40.306]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [20.0333, 40.283298]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-76.903999, 40.264999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [20.351999, 40.234001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-74.780998, 40.224998]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-8.416, 40.213001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [44.532669, 40.208023]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [29.075001, 40.195999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [26.414, 40.154999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [29.983, 40.150002]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [67.842003, 40.098999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [124.402, 40.096001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [20.149, 40.078999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [65.333298, 40.0667]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-82.992996, 40.044998]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [52.958, 40.025002]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [32.853001, 39.929001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-75.218224, 39.927551]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [127.557999, 39.914001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [116.388039, 39.906193]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [41.292, 39.903999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [20.0, 39.876999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-4.028, 39.859001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [34.814999, 39.818001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-86.135002, 39.813999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-7.488, 39.811001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-89.653999, 39.793999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [30.518999, 39.784]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [64.421997, 39.765999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [37.018002, 39.748001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [39.505001, 39.740002]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-8.805, 39.738998]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [43.062, 39.723999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [20.853001, 39.658001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [66.947998, 39.658001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [27.882999, 39.647999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [22.419001, 39.639999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [19.92, 39.619999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [118.180214, 39.615444]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-105.079002, 39.577999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [2.65, 39.5667]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [125.463997, 39.487999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [76.0, 39.48]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-0.367, 39.471001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [29.98, 39.418999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-76.618378, 39.321884]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-7.423, 39.290001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-8.682, 39.230999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [9.109, 39.224998]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [45.414001, 39.220001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-119.765999, 39.165001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [127.460999, 39.150002]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-84.47702, 39.14801]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [34.171001, 39.141998]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-75.525002, 39.129002]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [117.184998, 39.127998]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [39.533298, 39.116699]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [63.573002, 39.088001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-95.695, 39.046001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [121.598198, 39.031715]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [125.757004, 39.028999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-94.626564, 38.994118]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-76.491997, 38.959]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-6.338, 38.911999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [16.591, 38.903999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [22.434, 38.898998]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-76.953835, 38.890911]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [40.498001, 38.884998]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [65.75, 38.883301]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [30.540001, 38.764]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [35.479, 38.730999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-9.13, 38.73]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [41.501999, 38.73]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [29.408001, 38.681999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [39.226002, 38.681]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-90.34198, 38.638885]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [68.900002, 38.630001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [34.723999, 38.624001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [27.429001, 38.618999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-92.168999, 38.580002]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-121.422997, 38.567001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-7.906, 38.560001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-8.882, 38.521]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [125.762001, 38.507]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [43.409, 38.488998]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [106.263, 38.467999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [27.145, 38.432999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [42.123001, 38.394001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [26.139, 38.373001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-81.653999, 38.355]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [38.308998, 38.355]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [140.891006, 38.254002]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-84.838997, 38.201]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [21.883169, 38.141239]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [13.359, 38.120998]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [46.290001, 38.081001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [114.559708, 38.077095]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [125.714996, 38.040001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-7.863, 38.014]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-1.134, 37.98]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [34.694, 37.976002]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [126.566002, 37.969002]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [58.390133, 37.95042]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [41.932999, 37.944]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [40.230999, 37.914001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [69.780998, 37.911999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [112.552002, 37.893002]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [32.481998, 37.877998]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [127.727997, 37.859001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [27.841999, 37.855999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [68.800003, 37.833332]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-122.380089, 37.795818]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [29.086, 37.777]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [30.556999, 37.764999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [38.278999, 37.764999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [30.283333, 37.716667]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [61.839001, 37.591]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [36.937, 37.585999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [43.750999, 37.568001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-77.473, 37.563]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [45.071999, 37.536999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [22.368999, 37.507999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [126.633423, 37.486248]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-5.971, 37.373001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-121.847458, 37.308105]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [40.75, 37.307999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [9.861915, 37.297455]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [49.592999, 37.273998]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [67.25, 37.25]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [28.367001, 37.220001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [38.797001, 37.159]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [70.579002, 37.120998]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [37.389999, 37.069]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-7.928, 37.019001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [35.324001, 37.0]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [7.756, 36.903]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [30.709, 36.893002]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [6.908, 36.881001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-76.26857, 36.879292]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [43.0, 36.866699]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [10.2, 36.866669]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [5.766, 36.821999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [10.166, 36.819]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [4.033333, 36.799999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [34.646, 36.797001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [3.05, 36.783298]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [5.078, 36.757]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [69.540001, 36.73]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [68.860001, 36.727001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [9.192, 36.724998]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [67.110001, 36.703999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [48.485001, 36.671001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [65.744003, 36.661999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [116.967003, 36.655998]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [101.764999, 36.645]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [127.498001, 36.634998]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [53.053001, 36.563999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [8.75, 36.5]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [40.766998, 36.493]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [2.834, 36.480999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [7.428, 36.466]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [10.735, 36.456001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [10.147, 36.400002]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [3.897, 36.381001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [6.609, 36.360001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [43.137127, 36.335567]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [127.433998, 36.324001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [59.597, 36.290001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [2.776, 36.266998]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [68.040001, 36.261002]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [36.116669, 36.233334]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [37.159283, 36.215546]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [5.414, 36.188999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [44.015999, 36.18]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [8.6667, 36.166698]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [120.434128, 36.148354]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-86.818001, 36.141998]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [68.703003, 36.132]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-5.352, 36.129002]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [103.599998, 36.112999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [9.3833, 36.083302]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [4.63, 36.058998]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [39.036999, 35.946999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [0.09, 35.939999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [36.640999, 35.932999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [64.776001, 35.919998]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [14.504, 35.912998]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [7.15, 35.849998]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [10.635873, 35.829548]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [127.133331, 35.816666]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-78.643997, 35.791]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-0.52, 35.75]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [10.767288, 35.730698]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [4.545, 35.700001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [10.0167, 35.700001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-105.942001, 35.682999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [139.809006, 35.682999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [53.396, 35.571999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [45.453999, 35.558998]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [6.172, 35.556999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [35.792, 35.521]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [139.727219, 35.50457]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-97.529999, 35.490002]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [11.040869, 35.48391]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [44.390999, 35.469002]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [139.619995, 35.437]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [8.121, 35.407001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [0.14, 35.400002]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [1.326, 35.377998]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [25.134001, 35.338001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [40.153999, 35.335999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [33.333, 35.326]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [46.993999, 35.319]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [8.7167, 35.216702]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-80.835686, 35.205814]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-0.639, 35.196999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [33.368999, 35.171001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [136.921005, 35.154999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [36.751999, 35.138]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-90.000328, 35.114727]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [33.950001, 35.105999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [9.5, 35.016701]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [69.333298, 35.016701]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [69.169998, 35.014]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [135.755005, 35.008999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [63.133301, 34.983002]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [33.636002, 34.917]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [35.897999, 34.891998]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-1.314, 34.882999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [71.150002, 34.866001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [5.727, 34.856998]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [0.149, 34.841]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [67.810997, 34.82]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [48.508999, 34.792999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-92.309998, 34.761002]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [113.641777, 34.757683]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [32.416698, 34.75]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [10.759258, 34.745232]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [36.718174, 34.733875]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [135.221207, 34.690147]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-1.912, 34.688999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [33.050999, 34.682999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [3.25, 34.681]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [112.361237, 34.671349]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [70.166702, 34.650002]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [135.518997, 34.636002]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [69.136757, 34.530907]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [65.25, 34.516701]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [68.800003, 34.450001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [8.787, 34.422001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [132.445007, 34.377998]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [62.187, 34.345001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [36.007069, 34.343758]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [47.056999, 34.307999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [108.883362, 34.265697]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [43.875, 34.194]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [74.804001, 34.081001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-4.996, 34.043999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-6.833, 34.014999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-80.997002, 34.014]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [71.544998, 34.004002]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-118.25, 34.0]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [68.966698, 33.966702]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [8.131, 33.924]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-5.557, 33.903999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [10.103, 33.893002]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [35.5, 33.883331]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [35.918999, 33.842999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [132.774994, 33.834999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [35.533298, 33.833302]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [2.878, 33.806999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-84.348999, 33.796001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [44.643002, 33.743999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [73.060547, 33.718151]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [8.971, 33.689999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [130.797455, 33.681866]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [46.423, 33.639]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [73.043747, 33.605804]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-7.632, 33.605]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [69.223999, 33.598]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [130.401993, 33.580002]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [68.419998, 33.551998]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-112.110001, 33.508999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [126.533333, 33.508198]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [36.299999, 33.5]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [48.353001, 33.484001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [43.312, 33.431999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [10.4167, 33.400002]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [44.397999, 33.334]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [35.825001, 33.119999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [10.4667, 33.0]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [13.156891, 32.893131]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [129.865997, 32.764999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-96.663689, 32.763729]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-117.125496, 32.761459]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [22.639, 32.754009]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [12.73, 32.754002]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [36.566002, 32.706001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-115.467003, 32.654999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [51.679001, 32.651001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [14.269983, 32.650311]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-16.821934, 32.645161]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [65.866699, 32.633301]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [36.105, 32.625]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [44.025002, 32.613998]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [35.861, 32.556999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [45.819, 32.501999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [44.445999, 32.497002]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [62.116001, 32.375]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [15.095, 32.374001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-86.299004, 32.360001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [50.854, 32.320999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-90.203003, 32.319]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-64.779167, 32.289028]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [13.0167, 32.166]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [20.068001, 32.122002]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [66.900002, 32.105]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [118.768997, 32.048]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [34.77, 32.044998]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [35.723, 32.042999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [44.928001, 31.987]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [44.333302, 31.983299]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [5.342, 31.962999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [35.932907, 31.949383]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [54.361, 31.896999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [117.276001, 31.861]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [47.151001, 31.837]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-106.449997, 31.780001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-8.012, 31.631001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [74.871552, 31.63089]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [65.699997, 31.611]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-2.22, 31.608]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [64.360001, 31.583]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [74.341003, 31.545]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [31.813, 31.422001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [73.083458, 31.408951]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [27.237, 31.35]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [48.683998, 31.316999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [45.282001, 31.315001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [32.292, 31.257]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [121.473, 31.247999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [29.9051, 31.204487]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [35.702999, 31.18]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [61.887001, 31.112]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [30.936001, 31.108999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [77.166, 31.104]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [46.256001, 31.042999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [31.379999, 31.039]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [30.472, 31.030001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [30.996, 30.778999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [20.224001, 30.76]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [76.783997, 30.738001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [104.070999, 30.67]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [51.594002, 30.659]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [30.9, 30.591999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [32.265999, 30.589001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [31.516666, 30.583332]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [114.278999, 30.573]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [47.760864, 30.50349]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [31.183332, 30.466667]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-91.153, 30.465]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-84.300003, 30.450001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-9.611, 30.417999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-81.660004, 30.33]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-97.733002, 30.280001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [57.067001, 30.280001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [120.165001, 30.253]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [67.017998, 30.209]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [35.736, 30.191999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [9.818351, 30.138603]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [31.250797, 30.077911]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [31.220959, 30.051508]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [32.560001, 29.959999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-90.098686, 29.956379]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-95.407112, 29.77183]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [91.132004, 29.650999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [52.530998, 29.601999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [106.52269, 29.544104]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [60.873001, 29.5]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-98.524574, 29.429922]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [47.974045, 29.385916]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [48.0, 29.333332]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [47.695999, 29.332001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [30.833332, 29.316668]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [80.599998, 29.299999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [48.068001, 29.097]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-110.961998, 29.094]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [31.097, 29.076]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [50.833, 28.922001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [80.593002, 28.695]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [115.889, 28.671]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [77.216667, 28.666668]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-106.073997, 28.631001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [82.183296, 28.35]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [83.583298, 28.266701]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [83.972, 28.264]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [113.0, 28.1]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [30.759001, 28.089001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [81.620003, 28.063999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-82.593025, 27.997358]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-0.29, 27.868]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [85.31295, 27.712017]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-8.16, 27.700001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [89.833298, 27.633301]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [85.129997, 27.551001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [83.383301, 27.5333]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [89.667, 27.443001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [89.916702, 27.4333]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [89.516701, 27.383301]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [88.616997, 27.329]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [86.086998, 27.326]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [33.833302, 27.233299]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [2.53, 27.200001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [56.273998, 27.195005]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [31.184999, 27.184]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [93.550003, 27.15]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [14.431, 27.065001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-13.18, 27.0]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [87.926003, 26.908001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [75.801003, 26.905001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [80.919998, 26.849001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [106.699997, 26.572001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [31.695, 26.545]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [86.733299, 26.5333]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [80.317863, 26.45783]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [87.283302, 26.450001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [50.616001, 26.261999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [50.583332, 26.216667]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [50.537868, 26.21596]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [127.692001, 26.205]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [56.301014, 26.192488]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [32.73, 26.162001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [91.783302, 26.133301]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [50.549, 26.121]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [50.61385, 26.1]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [119.304001, 26.070999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [13.91, 25.91]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-80.270218, 25.83213]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [55.960838, 25.789]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-100.317001, 25.677]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [94.115997, 25.667999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [85.135002, 25.614]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [55.562454, 25.578339]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [91.883331, 25.566668]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [30.556999, 25.436001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-100.994003, 25.417999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [55.44109, 25.402868]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [68.36647, 25.380186]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [97.388, 25.379]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [55.410999, 25.372]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [51.532337, 25.284353]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [82.956337, 25.282011]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [55.328999, 25.271]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [56.349998, 25.118999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-77.339996, 25.066999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [102.702003, 25.051001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [121.506729, 25.035091]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [67.028, 24.893]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-107.386002, 24.805]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [93.941002, 24.788]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [46.77, 24.65]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [54.370998, 24.476]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [39.700001, 24.43]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [88.639, 24.358]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-110.309532, 24.156427]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [120.67028, 24.143642]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [32.917999, 24.077999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-104.663002, 24.028999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [91.266701, 23.8167]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-99.139, 23.739]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [90.407143, 23.709919]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [58.588001, 23.607]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-106.269997, 23.361511]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [77.412003, 23.23]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [72.666664, 23.200001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [113.29361, 23.096195]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-81.565002, 23.049999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-82.416451, 23.048952]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [72.566864, 23.039791]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [120.209694, 23.015982]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [89.557999, 22.843]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [108.295998, 22.837999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [104.933334, 22.833334]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [5.55, 22.83]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-102.555, 22.764]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-12.707, 22.679001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [106.267998, 22.664]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [93.616699, 22.65]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [120.286057, 22.608015]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [88.334, 22.544001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [103.949997, 22.5]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-83.688004, 22.424999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-79.966003, 22.414]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [114.230118, 22.379896]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [91.824997, 22.33]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [114.177002, 22.274]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-97.842628, 22.243235]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [113.545174, 22.199213]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-100.980003, 22.152]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-80.444, 22.15]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [96.084, 21.976]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-79.443001, 21.936001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-102.290001, 21.888]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-82.799004, 21.885]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [95.961998, 21.879999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [106.757004, 21.846001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-78.763, 21.841]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [105.210999, 21.818001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [31.280001, 21.76]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [103.343002, 21.74]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [104.875, 21.705]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [102.099998, 21.6833]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [105.862999, 21.551001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-104.897003, 21.507999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-71.133331, 21.466667]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [39.814838, 21.427382]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-77.914001, 21.386]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-157.862, 21.329]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [103.910004, 21.327999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [105.428001, 21.305]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [106.192001, 21.271]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [79.089111, 21.155758]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [105.82, 21.030001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-101.264, 21.02]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-89.627998, 20.983]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-76.949997, 20.966]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [101.416702, 20.950001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [107.081001, 20.948]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [106.331001, 20.941999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-17.066734, 20.900051]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-76.262001, 20.891001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [106.679794, 20.861359]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [105.333, 20.83]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [97.038002, 20.782]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-103.344002, 20.674]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-100.387001, 20.583]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-13.05, 20.511]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [104.033302, 20.4167]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-77.112999, 20.344]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [85.834999, 20.264]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [105.974998, 20.253]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [73.001793, 20.191545]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-75.209, 20.143]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [94.917999, 20.139999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [92.894997, 20.139]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-98.754997, 20.120001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-75.829002, 20.028999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-72.829483, 19.931768]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [99.833, 19.906]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [102.141998, 19.884001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-90.526001, 19.855]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-71.646004, 19.843]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [105.777, 19.809]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-70.690247, 19.790218]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-72.213455, 19.755552]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-14.391, 19.747]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-155.067291, 19.714815]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-101.184998, 19.697001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-71.844833, 19.665567]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [97.206001, 19.665001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [37.219688, 19.615713]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-71.074997, 19.552]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-71.705002, 19.548]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-96.903, 19.533001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-71.344994, 19.505001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-70.707001, 19.455999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-72.689003, 19.450001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-99.127571, 19.427046]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-70.523003, 19.396999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-70.416702, 19.382999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-69.847, 19.375999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [103.366699, 19.3333]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-98.237, 19.309999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-70.253998, 19.301001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [97.969002, 19.301001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-81.383331, 19.299999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-99.666702, 19.283001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-103.735001, 19.250999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-70.550003, 19.25]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-69.332001, 19.212]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [101.484001, 19.195]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [30.474001, 19.169001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [99.903999, 19.159]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-72.003998, 19.143]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [72.825996, 19.077]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-70.152, 19.059]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-98.192947, 19.048632]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-70.408997, 18.941999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-99.221001, 18.921]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-71.707001, 18.875999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-71.228996, 18.806999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-69.783997, 18.806999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [99.0, 18.787001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [100.785004, 18.775999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-69.257004, 18.764]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-69.035004, 18.764]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [105.671997, 18.669001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-74.113754, 18.639927]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-68.708, 18.615999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-11.431, 18.558001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [73.852272, 18.535748]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-72.343109, 18.526617]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [99.073997, 18.503]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-88.291, 18.497999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-71.850998, 18.493]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-69.899002, 18.489]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-77.656044, 18.479582]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-71.421997, 18.479]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-77.920998, 18.469]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-69.307999, 18.455999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-70.728996, 18.454]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-78.179001, 18.443001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-77.199532, 18.43264]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-68.968002, 18.426001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-70.109001, 18.416]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-64.621696, 18.409067]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-66.069, 18.399]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-88.388, 18.398001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-76.900002, 18.377001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-64.933334, 18.35]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [105.916702, 18.35]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [99.484001, 18.292]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-70.331001, 18.280001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-72.537003, 18.235001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-63.066666, 18.216667]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-71.099998, 18.208]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-67.142998, 18.202999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-73.748001, 18.190001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-77.947998, 18.164]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-76.379997, 18.159]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [100.163002, 18.15]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-88.556999, 18.083]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-71.740997, 18.038]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-77.5, 18.033001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-77.851997, 18.031]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-66.613998, 18.021]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [102.680237, 18.001732]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-76.952003, 17.995001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-92.936996, 17.976]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-77.242996, 17.969]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-76.799522, 17.966923]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [19.120001, 17.93]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-76.329002, 17.891001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [102.747002, 17.884001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [83.330002, 17.75]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [100.102997, 17.622999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-99.500999, 17.552]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-88.181999, 17.496]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [101.735001, 17.49]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [106.624001, 17.464001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [102.790001, 17.407]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [104.800179, 17.396971]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [78.485001, 17.395]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [96.498001, 17.327999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-62.731998, 17.292999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [104.151001, 17.163]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-89.060997, 17.156]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-61.842171, 17.124773]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-88.800003, 17.120001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-96.713997, 17.062]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-13.909, 17.058001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [99.75, 17.013]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [7.983, 16.993999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-99.931496, 16.974386]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-88.213997, 16.965]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [43.764999, 16.943001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-89.884003, 16.927]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [99.120003, 16.878]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [96.124893, 16.872223]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [97.616699, 16.85]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [107.133301, 16.85]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [100.265999, 16.813]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [94.732002, 16.774]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-3.01, 16.76]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-93.109001, 16.743999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-62.201, 16.68]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-9.617, 16.660999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-11.404, 16.617001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-7.261, 16.615999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [104.747002, 16.561001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-15.799, 16.511999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [97.645035, 16.492678]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [99.528999, 16.473]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [107.584999, 16.462999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [100.348999, 16.438999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [102.836998, 16.433001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [103.509003, 16.427999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [101.158997, 16.419001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-86.518997, 16.33]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-0.051, 16.273001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [103.297997, 16.184]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-13.497, 16.152]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-88.800003, 16.115999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [108.214996, 16.052]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [103.654999, 16.051001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-61.724258, 16.004915]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-16.297838, 15.95121]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-85.948616, 15.916615]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [102.040001, 15.798]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [104.151001, 15.788]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-86.872002, 15.755]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-88.597, 15.727]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [106.427002, 15.716]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [100.134003, 15.701]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [43.603001, 15.693]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [32.48, 15.62]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [32.529999, 15.55]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-88.028, 15.502]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [73.818001, 15.492]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-90.372002, 15.471]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [45.334, 15.421]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [100.026001, 15.379]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [44.209503, 15.361444]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [38.970001, 15.33]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-91.467003, 15.317]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-61.388474, 15.299]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-83.780998, 15.257]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [104.857002, 15.239]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [100.125999, 15.179]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-12.176, 15.161]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [145.735001, 15.15]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [108.811996, 15.124]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [104.333, 15.114]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-90.314003, 15.103]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-87.290001, 15.06]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-91.133301, 15.0333]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [50.0, 15.0]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [103.112, 14.996]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-89.528999, 14.972]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [102.101997, 14.969]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-91.800003, 14.966]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-23.521, 14.923]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-88.236, 14.919]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-91.358002, 14.914]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [5.266, 14.891]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [100.401001, 14.887]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [103.497002, 14.886]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [105.866699, 14.8833]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-90.016701, 14.85]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-91.5, 14.8333]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [106.838997, 14.808]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-16.924, 14.805]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-89.543999, 14.797]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [100.619003, 14.797]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [42.945999, 14.795]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-91.182999, 14.773]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-88.778, 14.766]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-17.452, 14.687]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-86.219002, 14.666]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-90.82, 14.662]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-16.233999, 14.653]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [121.033348, 14.649989]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-89.988998, 14.633]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-90.524902, 14.618008]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [120.966942, 14.616697]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-61.076, 14.60744]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-88.583298, 14.5833]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [100.449997, 14.5833]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-90.733299, 14.5667]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [44.393002, 14.55]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [46.799999, 14.55]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-91.677017, 14.537099]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-91.500366, 14.534211]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [20.923, 14.534]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [100.914001, 14.513]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-4.183, 14.483]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [100.128998, 14.471]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-87.642998, 14.454]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-0.2333, 14.45]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-11.429, 14.449]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-89.181999, 14.437]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [108.014999, 14.35]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-16.416, 14.344]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [100.560997, 14.344]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-88.166702, 14.333]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-87.683998, 14.32]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-90.781998, 14.303]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-89.897003, 14.29]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-90.297997, 14.279]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [101.216003, 14.2]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-16.096001, 14.143]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [15.317, 14.122]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-87.203003, 14.099]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-1.627, 14.099]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [98.202003, 14.084]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-89.094002, 14.072]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [101.377998, 14.049]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-0.028, 14.034]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [100.533302, 14.0167]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-60.983002, 14.0]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-89.553001, 13.996]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [45.574001, 13.979]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [44.179001, 13.968]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [108.01667, 13.95]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-86.850998, 13.944]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-89.845001, 13.919]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-88.633301, 13.8667]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [100.519852, 13.848032]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [20.832001, 13.837]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [100.064003, 13.818]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [104.966698, 13.8167]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [8.994, 13.797]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-13.678, 13.773]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [109.23333, 13.766667]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [100.51667, 13.75]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-89.719002, 13.721]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-89.200233, 13.701412]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-88.099998, 13.7]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [101.075996, 13.679]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-89.290001, 13.674]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-88.785004, 13.641]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-86.473, 13.63]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [25.35, 13.627]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [100.603996, 13.588]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [44.014999, 13.57]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-2.417, 13.569]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-14.767, 13.551]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [100.274002, 13.536]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-87.488998, 13.528]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [105.973999, 13.523]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [2.12, 13.514]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-88.867996, 13.508]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [106.981003, 13.507]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [99.900002, 13.5]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [39.473999, 13.496]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-16.094999, 13.494]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [7.101, 13.49]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-86.583, 13.476]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-88.177002, 13.473]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [144.746994, 13.467]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [14.7167, 13.466]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-16.596792, 13.46395]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-16.589001, 13.455]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-6.255, 13.436]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [100.000999, 13.413]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-15.678561, 13.377312]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [103.863998, 13.369]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [100.987, 13.368]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-88.431999, 13.346]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-87.838997, 13.332]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [12.6167, 13.3167]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-14.223, 13.31]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-87.194, 13.303]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-16.653, 13.279]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [18.337999, 13.214]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [30.16, 13.18]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-61.229313, 13.155361]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [99.949997, 13.1]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-59.615849, 13.095871]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-86.0, 13.091]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [103.204002, 13.089]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-1.088, 13.088]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-86.356003, 13.087]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [109.316002, 13.082]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-3.07, 13.069]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [80.248001, 13.062]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [5.246, 13.057]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [3.204, 13.047]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [44.900002, 13.0333]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [7.606, 12.993]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [77.58773, 12.974751]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-0.138, 12.969]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-2.263, 12.954]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-85.917, 12.921]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-14.944, 12.9]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [45.041504, 12.766245]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-3.86, 12.729]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [104.889, 12.712]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [101.285004, 12.677]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [108.050003, 12.666667]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-0.569, 12.657]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-7.986482, 12.65295]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-87.129997, 12.624]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [102.116997, 12.606]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [37.467999, 12.6]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-16.284, 12.58]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-1.293, 12.577]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [103.928001, 12.534]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-70.026001, 12.525]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-15.227, 12.493]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-13.296, 12.48]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-1.67, 12.48]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-85.660004, 12.471]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [106.024002, 12.469]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-3.464, 12.455]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [4.197, 12.455]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [107.199997, 12.45]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-86.880997, 12.433]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-2.466946, 12.333488]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-14.234, 12.28]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-16.165001, 12.269]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [104.664001, 12.257]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-2.364, 12.249]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-0.611, 12.243]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [109.203003, 12.243]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [102.509003, 12.237]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [18.698, 12.187]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-0.356, 12.177]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-14.69, 12.168]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-86.273003, 12.151]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-68.970551, 12.138784]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [15.240824, 12.104139]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-85.370003, 12.104]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-12.301, 12.084]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [1.796, 12.077]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-61.744999, 12.065]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-1.334, 12.064]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [0.361, 12.055]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-83.765999, 12.011]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [8.5, 12.0]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [105.464996, 11.991]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-86.095001, 11.969]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [43.291, 11.967]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [108.442001, 11.945]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [79.836998, 11.933]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-85.959999, 11.928]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [13.161, 11.851]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-86.195, 11.846]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [99.800003, 11.803]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [9.350341, 11.799188]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [42.900002, 11.7833]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-0.359, 11.774]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-15.195, 11.773]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-13.213, 11.754]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [11.966, 11.749]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [92.758331, 11.667563]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-1.065, 11.662]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [103.042633, 11.61394]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-15.486, 11.583]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [104.913193, 11.564736]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-72.898003, 11.552]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [43.099998, 11.5]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [105.323997, 11.484]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [104.518997, 11.452]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-11.67, 11.44]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-85.833, 11.432]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-9.179, 11.419]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-69.678001, 11.403]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-12.299, 11.323]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [106.147003, 11.323]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-5.673, 11.315]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-10.726, 11.299]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [49.166698, 11.259149]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-74.181, 11.25]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-15.1667, 11.2167]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-4.292, 11.178]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-1.135, 11.169]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [42.712002, 11.152]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [42.372002, 11.104]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-2.098, 11.094]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-12.401, 11.08]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [105.801003, 11.08]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-63.883331, 11.033333]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [20.2833, 11.0333]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-74.806, 10.984]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [104.783302, 10.9833]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-4.908, 10.974]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [106.652748, 10.969072]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-3.248, 10.952]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [106.816666, 10.95]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-14.297, 10.939]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [108.103996, 10.921]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-13.043, 10.905]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-0.8667, 10.7667]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [106.662453, 10.759182]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-11.109, 10.748]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-12.272, 10.656]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-9.892, 10.653]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-71.637001, 10.645]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-61.490063, 10.639734]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-4.758, 10.627]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-85.436996, 10.626]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [104.181999, 10.606]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [14.328, 10.593]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [47.333302, 10.5833]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [72.633156, 10.550958]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [106.413002, 10.531]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [7.443, 10.519]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-66.898285, 10.496049]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [99.177002, 10.493]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-6.409, 10.481]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-73.250999, 10.467]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [105.636002, 10.467]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-64.181999, 10.454]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-75.533997, 10.414]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-9.306, 10.384]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [105.438004, 10.382]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-13.552, 10.378]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-12.092, 10.374]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [106.366997, 10.354]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-67.040001, 10.342]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-68.746002, 10.336]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [37.73, 10.334]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-3.174, 10.325]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [1.389, 10.313]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [9.845, 10.31]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [22.794001, 10.276]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [15.371, 10.274]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [105.963997, 10.256]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-67.594002, 10.245]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [106.375, 10.235]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-14.043, 10.185]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-68.002998, 10.178]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-64.692001, 10.133]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-69.338997, 10.066]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-12.866, 10.055]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-2.496, 10.055]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-10.743, 10.039]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [105.783997, 10.032]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-84.221001, 10.016]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [105.084999, 10.007]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-84.120003, 9.992]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-83.029999, 9.99]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-84.843002, 9.969]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [98.638, 9.962]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [106.334, 9.934]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-84.078613, 9.930476]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [8.893, 9.924]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [78.121727, 9.913986]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-67.353996, 9.901]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-83.920998, 9.857]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-63.181999, 9.742]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-68.589996, 9.658]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [6.553, 9.608]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [105.966667, 9.6]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-5.202, 9.594]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [44.060001, 9.561]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-13.672, 9.55]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-78.959854, 9.543206]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [45.533298, 9.5333]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [31.655001, 9.53]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-6.489, 9.522]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-7.577, 9.509]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-5.645, 9.446]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-13.098, 9.43]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-0.833, 9.397]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [16.305, 9.395]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-70.431999, 9.375]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-79.895348, 9.355107]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-82.24939, 9.333913]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [2.626, 9.33]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-75.391998, 9.307]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [13.395, 9.298]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [105.73333, 9.283333]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-2.992, 9.269]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-9.014, 9.265]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [0.789, 9.261]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [12.465, 9.239]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-10.113, 9.187]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [18.396, 9.147]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [99.334, 9.135]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [36.540001, 9.087]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [7.256381, 9.057267]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-62.049999, 9.057]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-69.75, 9.044]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [38.700001, 9.03]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-79.517082, 9.002879]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [11.369, 8.884]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-12.044, 8.881]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-75.882004, 8.757]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-8.657, 8.687]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [16.851, 8.65]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-70.209999, 8.63]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-71.149002, 8.601]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [81.233002, 8.569]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [0.985, 8.557]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-10.151, 8.554]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [16.08971, 8.553889]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-9.471, 8.542]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-80.355003, 8.513]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [76.952003, 8.504]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [4.545, 8.492]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-13.239, 8.486]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [98.533997, 8.451]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-82.431, 8.428]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [99.964996, 8.422]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-9.75, 8.4167]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [20.650999, 8.41]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [48.481998, 8.405]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-78.13726, 8.397867]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-4.42, 8.357]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [80.383331, 8.35]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-7.684, 8.28]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [35.536999, 8.149]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-5.108, 8.144]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-63.553001, 8.127]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-80.964996, 8.101]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-6.188, 8.054]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [98.912003, 8.052]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [79.825996, 8.033]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-2.792, 8.028]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-80.434998, 7.98]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-11.734, 7.968]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-6.666, 7.96]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [39.139999, 7.95]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-67.480003, 7.901949]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-72.502998, 7.891]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-11.185, 7.877]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [98.385002, 7.877]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [6.737, 7.809]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-3.166, 7.798]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-80.277, 7.766]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [4.561, 7.766]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-72.227997, 7.765]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-8.818, 7.755]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [8.523, 7.747]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-7.6167, 7.7333]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [27.992001, 7.696]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-5.031, 7.688]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [36.838001, 7.678]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-5.576, 7.669]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [100.081001, 7.615]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-9.26, 7.563]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [99.614998, 7.549]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-4.461, 7.47]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-5.294, 7.451]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-6.05, 7.435]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-7.543, 7.405]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [3.895278, 7.37884]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-6.483, 7.373]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-8.685, 7.371]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [134.491684, 7.340619]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-2.336, 7.336]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [13.584, 7.324]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [80.637001, 7.284]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-8.154, 7.261]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [5.194, 7.247]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [100.593002, 7.197]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [1.989, 7.184]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [3.35, 7.159]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-3.202, 7.128]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-73.120003, 7.113]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [125.613678, 7.08008]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-70.758003, 7.079]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [38.477001, 7.06]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-3.959, 7.052]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-7.4833, 7.0167]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [39.974998, 7.006]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-9.4833, 7.0]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [19.1667, 7.0]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [81.056, 6.985]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-5.748, 6.978]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [79.848, 6.927]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [0.633, 6.902]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-6.446, 6.882]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [101.25, 6.864]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-5.283, 6.818]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [47.424, 6.773]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-58.169998, 6.77]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-11.3667, 6.75]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-7.336, 6.742]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-3.49, 6.727]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [80.386002, 6.693]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-1.622, 6.687]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-4.2, 6.65]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-4.705, 6.644]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-5.912, 6.618]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [100.066704, 6.6167]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [1.715, 6.615]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [2.632503, 6.601096]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [0.471, 6.6]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-5.019, 6.552]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-7.4833, 6.55]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [101.289001, 6.55]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [21.993999, 6.538]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-10.349, 6.526]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [17.455, 6.491]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-6.588, 6.485]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [7.492, 6.451]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [3.3, 6.45]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-10.6, 6.4333]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [100.190002, 6.433]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [101.824997, 6.428]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-5.424, 6.376]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [2.44, 6.357]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [5.626, 6.339]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [16.378, 6.316]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-75.592003, 6.241]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [6.74, 6.193]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-67.488998, 6.185]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-5.872, 6.146]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [102.239998, 6.118]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [100.362, 6.111]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [1.201549, 6.102837]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-3.864, 6.098]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-0.262, 6.087]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-8.1333, 6.0667]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [37.549999, 6.0333]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [80.218002, 6.033]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [116.087585, 5.967247]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [10.148, 5.959]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-56.992001, 5.938]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [15.593, 5.933]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-4.222, 5.927]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-55.073002, 5.911]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-56.3167, 5.8833]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-10.044, 5.883]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-4.822, 5.877]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-5.683, 5.848]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-5.36, 5.839]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-55.169998, 5.826]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-55.480999, 5.797]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-6.603, 5.782]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [19.1, 5.7667]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [20.671, 5.759]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [46.507999, 5.742]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-76.653999, 5.691]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-67.635002, 5.666]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [95.333336, 5.566667]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-0.200924, 5.558563]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-73.362, 5.547]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [7.486, 5.532]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-54.074001, 5.496]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [7.026, 5.493]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [10.413, 5.486]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-3.2, 5.4667]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-9.578, 5.465]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [26.495001, 5.389]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-72.405998, 5.347]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [103.140999, 5.325]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-4.021887, 5.324857]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-5.023, 5.131]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-1.247, 5.105]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-75.517998, 5.067]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-54.966702, 5.0667]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-9.037, 5.008]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [7.85, 5.008]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [8.314, 4.957]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-6.079, 4.951]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-52.330002, 4.935]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [114.967003, 4.933]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-1.712, 4.93]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-8.1667, 4.8]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [7.005, 4.785]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-75.667, 4.783]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-6.637, 4.762]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [22.825737, 4.73795]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [45.200001, 4.734]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [101.075996, 4.591]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [13.685, 4.575]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-75.697998, 4.531]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-75.244003, 4.441]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-7.357, 4.416]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-7.714, 4.386]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [18.562342, 4.365856]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [21.18, 4.32]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [15.785, 4.249]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [102.042, 4.184]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [43.866699, 4.1833]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [9.231, 4.155]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-73.639999, 4.15]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [9.706374, 4.13665]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-67.866699, 3.883]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [17.993999, 3.866]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [11.514, 3.865]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [8.772559, 3.743596]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [98.676003, 3.585]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [16.040001, 3.521]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-76.522003, 3.457]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [8.55, 3.45]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [42.227001, 3.327]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [101.708, 3.15]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [43.5, 3.1333]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [101.550003, 3.0667]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [30.899, 3.024]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-75.283997, 2.929]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [11.148, 2.918]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-60.664001, 2.818]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [45.5, 2.8]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [32.285, 2.779]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [101.949997, 2.708]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-72.580002, 2.581]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [34.646, 2.533]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-76.603996, 2.42]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [102.254997, 2.2]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [11.33, 2.153]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [45.344143, 2.041178]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [9.816467, 1.849682]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [44.833302, 1.8]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [40.047001, 1.748]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [7.412, 1.645]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [11.311, 1.623]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-75.614998, 1.606]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [16.055, 1.605]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [17.999996, 1.59986]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [11.579, 1.598]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [110.344002, 1.549]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [103.760002, 1.5]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [124.849998, 1.483333]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [10.5667, 1.45]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-70.221001, 1.266]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-77.273003, 1.214]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-76.619003, 1.149]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [42.583302, 1.0833]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [34.167, 1.081]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-79.660004, 0.954]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-77.732002, 0.822]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [30.275, 0.671]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [32.533298, 0.5833]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [12.857, 0.562]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [101.432999, 0.551]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [25.195999, 0.519]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [33.202999, 0.438]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-78.130997, 0.363]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [6.728, 0.337]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [32.575001, 0.323]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [34.742001, 0.281]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [18.256001, 0.048]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-51.048, 0.036]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [109.338997, -0.023]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [34.747002, -0.095]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-78.524284, -0.229498]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [36.069, -0.28]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [31.733999, -0.335]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [42.539001, -0.346]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [36.951, -0.417]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [15.9167, -0.4833]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [117.153999, -0.502]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [37.449001, -0.524]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [30.649, -0.606]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [10.212, -0.706]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [8.782, -0.721]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [28.528, -0.757]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [119.850998, -0.899]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-89.606003, -0.9]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-78.606003, -0.932]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [100.351997, -0.954]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-77.816704, -0.9833]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-80.455002, -1.056]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [12.504, -1.127]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [116.860001, -1.21]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-78.620003, -1.24]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [36.804001, -1.27]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [31.808001, -1.322]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-48.498001, -1.439]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-77.987, -1.483]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [33.803001, -1.496]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [29.629999, -1.501]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [30.063, -1.58]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [103.616669, -1.6]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-79.002998, -1.606]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [13.603, -1.632]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-78.644997, -1.671]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [29.257, -1.695]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-79.529999, -1.795]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [11.004, -1.885]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [30.059, -1.95]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [147.279999, -2.032]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [29.35, -2.05]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [29.757999, -2.076]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [30.5333, -2.1667]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-79.907875, -2.203094]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [113.933334, -2.266667]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-78.114998, -2.313]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-54.610001, -2.46]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [29.5667, -2.4833]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [28.889788, -2.496074]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-44.300999, -2.515]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [32.889, -2.515]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [140.718994, -2.542]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [14.76, -2.543]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [150.806671, -2.566814]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [29.732, -2.6]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [141.304001, -2.69]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-78.844002, -2.75]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [30.326, -2.856]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [11.027, -2.857]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-79.014999, -2.898]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [29.5667, -2.9]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [29.825001, -2.912]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [104.757004, -2.991]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [29.366699, -3.0833]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [30.163, -3.1]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-60.014999, -3.122]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [30.516701, -3.1667]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [29.612, -3.261]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-79.954002, -3.266]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [17.386, -3.315]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [114.588997, -3.328]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [37.342999, -3.339]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [36.674, -3.366]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [29.356001, -3.372]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [29.9333, -3.4333]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [30.243999, -3.481]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [143.619995, -3.565]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-80.454002, -3.568]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [33.421001, -3.665]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [13.357, -3.691]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [128.199997, -3.716667]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-73.191002, -3.753]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-38.589001, -3.783]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [102.26667, -3.8]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [29.993, -3.931]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [29.612, -3.951]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [122.588364, -3.955436]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-79.204002, -3.99]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [39.654888, -4.050942]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-78.957001, -4.069]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [29.799999, -4.1333]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-69.949997, -4.15]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [13.554, -4.164]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [12.672, -4.194]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [152.169998, -4.205]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [15.285149, -4.285187]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [14.762, -4.356]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [55.445, -4.617]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [12.058093, -4.638708]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [29.618999, -4.876]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [32.826, -5.018]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [39.705227, -5.058037]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [39.098999, -5.069]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-42.801998, -5.105]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [119.722794, -5.19043]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-80.625, -5.194]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [145.782974, -5.231258]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [39.666698, -5.35]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [105.253998, -5.409]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [143.718002, -5.49]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [150.143005, -5.55]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [12.19, -5.557]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-35.210999, -5.806]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [13.471, -5.817]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [144.220001, -5.865]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [39.259998, -5.879]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [22.403, -5.892]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-76.989998, -6.012]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [144.960007, -6.023]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [145.386993, -6.088]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [39.283298, -6.1333]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [143.651993, -6.142]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [23.6667, -6.15]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [39.202999, -6.166]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [106.800003, -6.166667]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [35.737999, -6.175]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [155.565994, -6.228]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-77.867996, -6.235]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [14.2667, -6.3]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [146.990997, -6.724]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-79.836998, -6.763]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [38.916698, -6.7667]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [39.253349, -6.817359]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [37.660999, -6.822]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [107.607002, -6.912]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [110.426003, -6.971]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-34.867001, -7.13]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-78.511002, -7.162]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [19.0, -7.33]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [112.684372, -7.4]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [15.15, -7.75]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [35.692001, -7.777]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [110.369003, -7.797]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [145.837997, -7.927]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [31.617001, -7.967]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-34.915001, -8.085]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-79.029999, -8.112]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-74.527, -8.387]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [20.733999, -8.424]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [125.581001, -8.571]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [13.663, -8.578]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [116.137001, -8.59]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [115.21727, -8.706695]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-63.905998, -8.762]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [148.240005, -8.769]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [13.235, -8.812]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [33.438999, -8.891]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-78.453148, -8.9301]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [143.233719, -9.109158]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [14.914, -9.298]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [159.951782, -9.43385]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-77.530998, -9.536]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [16.341, -9.542]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [20.391001, -9.661]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-35.747723, -9.676889]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-76.231003, -9.925]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-67.811996, -9.979]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [39.707001, -10.002]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [123.587288, -10.172464]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-48.360344, -10.212761]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [40.183998, -10.275]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [150.449997, -10.306]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [35.651001, -10.682]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-76.263, -10.687]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-37.060001, -10.911]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-68.797546, -11.032495]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [28.891001, -11.202]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [13.849, -11.209]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [34.022999, -11.465]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [27.549999, -11.68]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [43.243, -11.7]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [19.905001, -11.791]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-77.143997, -12.057]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-75.210999, -12.075]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [26.400999, -12.18]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [49.309593, -12.263385]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [16.938999, -12.38]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [130.832001, -12.413]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [13.406, -12.577]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-69.192001, -12.603]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [15.736, -12.76]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-74.986, -12.79]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [40.5, -12.966667]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [28.634001, -12.968]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-38.480999, -12.993]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-74.221001, -13.173]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-176.151566, -13.273302]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [35.233299, -13.3]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-71.987, -13.526]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [32.645, -13.632]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-72.884003, -13.642]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-171.739487, -13.837029]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [33.773998, -13.983]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-75.744003, -14.064]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-170.697861, -14.268377]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [28.447001, -14.447]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [17.866699, -14.8]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-64.903, -14.841]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [13.492, -14.919]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [40.691036, -15.066138]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [39.257, -15.115]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [12.15, -15.166667]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [23.132, -15.277]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [28.17, -15.43]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-56.092999, -15.615]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [46.307648, -15.713927]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [133.220001, -15.75]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-47.897747, -15.792109]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [34.993999, -15.793]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-70.033997, -15.845]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-5.705, -15.922]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [33.587002, -16.164]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-71.523003, -16.398001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-68.146248, -16.499006]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-49.255001, -16.726999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [145.710007, -16.85]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-70.931, -17.194]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-66.167, -17.384001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-149.570007, -17.535]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [168.320999, -17.74]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-63.197418, -17.788792]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [31.02, -17.83]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [25.0833, -17.8333]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [25.858, -17.858]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [36.883999, -17.878]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-67.111, -17.975]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-70.250999, -18.018]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [178.447723, -18.134535]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [49.383301, -18.1667]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [47.528, -18.908001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-169.916672, -19.016666]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-65.255997, -19.042]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [33.483334, -19.133333]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [17.711, -19.247999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [146.830002, -19.299999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-65.755997, -19.583]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [17.341999, -19.639999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [34.835999, -19.827]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-43.909, -19.851999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-60.75, -19.9667]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [23.417999, -19.993999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [16.146, -20.108]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [57.495998, -20.165001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [28.709999, -20.200001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-70.149002, -20.221001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-40.414001, -20.333]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-54.616001, -20.451]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [16.646999, -20.464001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-62.203999, -20.52]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-58.029999, -21.035999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-175.245651, -21.130898]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [27.5, -21.171]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-159.766693, -21.233299]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [15.951, -21.436001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [47.077999, -21.459999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-64.731003, -21.532]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [21.646999, -21.705]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [15.853, -21.938999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [16.913, -21.983]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-60.610001, -22.030001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [26.711, -22.389]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [18.962999, -22.455]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-55.748001, -22.533001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [17.077, -22.559999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [14.528, -22.674]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-43.455177, -22.721573]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-42.881001, -22.839001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [14.617105, -23.101868]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [17.080999, -23.32]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [43.666668, -23.35]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-57.429001, -23.403]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [150.479996, -23.43]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-58.852001, -23.436001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-46.623001, -23.580999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [133.929993, -23.629999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-70.399002, -23.641001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [35.388, -23.874001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-46.309494, -23.9547]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-54.283298, -24.049999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-57.077, -24.089001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-65.301003, -24.198]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [26.152, -24.377001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [25.52, -24.402]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [17.959, -24.621]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [25.950802, -24.639925]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-65.407997, -24.789]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [16.972, -24.839001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [25.343, -24.978001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [33.639999, -25.041]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-130.102997, -25.066]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [25.677, -25.228001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-57.622002, -25.305]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-57.139999, -25.386999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-49.285, -25.43]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-56.428001, -25.452999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-54.623001, -25.527]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-57.151001, -25.624001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [28.218, -25.731001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-56.451, -25.784]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [31.247, -25.961]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [32.574001, -25.962]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [22.396999, -26.017]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [28.004309, -26.178957]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-58.176998, -26.183001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-56.368, -26.200001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [31.191298, -26.303381]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [31.952, -26.455]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [31.388, -26.495001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [17.160999, -26.502001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [18.132999, -26.573999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [15.155, -26.643999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-57.146999, -26.673]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-65.213997, -26.829]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-58.296001, -26.868]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [31.4167, -27.0]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-70.332001, -27.360001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-55.851002, -27.377001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-55.905998, -27.398001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [153.026001, -27.454]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-58.987, -27.457001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-58.818001, -27.487]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-48.618999, -27.576]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-64.268997, -27.790001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [18.745001, -28.021999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-65.780998, -28.466]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [24.83, -28.66]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [28.25, -28.75]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [28.056, -28.878]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [167.962952, -29.06377]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [26.225, -29.118]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [27.753, -29.153]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [29.077999, -29.291]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [27.492001, -29.308001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-66.855003, -29.413]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [30.382999, -29.601]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [27.252001, -29.830999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [30.942188, -29.836372]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-71.245003, -29.900999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-51.208, -30.040001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [28.702, -30.117264]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [27.48, -30.159]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-56.473, -30.41]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [27.716, -30.410999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-55.529037, -30.887407]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-64.18, -31.316]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-57.963001, -31.396]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-68.527, -31.534]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-60.698002, -31.617001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-55.983002, -31.705]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-60.532001, -31.73]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [115.852997, -31.955999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [115.93457, -32.044167]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-58.080002, -32.332001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-54.176998, -32.362999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-68.830002, -32.896999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [151.779556, -32.927959]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-60.66394, -32.937737]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-71.555, -33.021]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [27.9, -33.029999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-58.304001, -33.139]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-54.375, -33.230999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-58.014999, -33.278]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-66.348, -33.316002]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-56.509998, -33.417]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-70.647514, -33.475025]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-56.901001, -33.543999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [25.484299, -33.881577]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [151.028198, -33.889774]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [18.482, -33.979]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-56.215, -34.098999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-56.710999, -34.355]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-55.227001, -34.375]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-57.84, -34.48]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-54.326, -34.497002]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-56.284, -34.537998]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-70.985001, -34.588001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [138.520828, -34.811676]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-54.948002, -34.912998]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-56.169998, -34.919998]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [149.042007, -35.349998]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-71.660004, -35.423]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [174.315994, -35.721001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-64.288002, -36.627998]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-73.055, -36.826]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [174.761002, -36.903999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [176.154999, -37.700001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [175.272995, -37.776001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [145.075104, -37.852959]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [178.016006, -38.659]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-62.274067, -38.725273]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-72.575996, -38.729]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-68.283333, -38.944908]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [174.078003, -39.07]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [176.841003, -39.639999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [175.035004, -39.93]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-62.995026, -40.815025]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [173.248001, -41.297001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-72.952003, -41.474998]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [171.207001, -42.472]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [147.291, -42.851002]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-65.099998, -43.299999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [172.638, -43.523998]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-72.702003, -45.402]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-67.5, -45.830002]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [170.473999, -45.883999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [168.373001, -46.412998]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-69.228996, -51.625]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-57.848999, -51.701]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-70.934654, -53.166161]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-68.297997, -54.792]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [129.054993, 35.158001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [23.331871, 42.707264]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-15.598, 11.864]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [147.147949, -9.497187]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-74.080513, 4.63022]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [12.55, 55.720001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [103.831787, 1.268858]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [126.935249, 37.542351]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [16.320986, 48.202118]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-58.449841, -34.622501]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [4.368, 50.837002]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [96.82608, -12.157536]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-2.973783, 43.282158]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [126.907997, 35.153]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [128.591003, 35.863998]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [100.310997, 5.364]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [165.5, -21.5]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [166.916702, -0.5167]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [51.448002, 35.773998]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [49.700001, 34.083332]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-5.3167, 35.883301]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [130.933304, 33.950001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [136.761993, 35.41]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [77.216751, 28.568726]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [35.22522, 31.773746]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [17.934, 62.633999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [15.638, 58.402]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [14.178, 57.785999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [44.233002, 46.266998]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [90.374001, 22.702999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [159.983002, 59.083]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [114.532997, 51.167]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [104.699997, 52.833]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [100.282997, 64.333]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [86.217003, 69.449997]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [69.0, 61.016998]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [54.667, 59.016998]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [53.033001, 67.616997]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [44.783001, 43.233002]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [132.899994, 48.817001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [34.333, 61.783001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [32.0, 63.0]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [23.708, 70.677002]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-53.553001, 69.244003]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-133.705994, 68.365997]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [64.040001, 67.504997]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-21.895, 64.135002]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-149.897995, 61.202999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-66.810997, 54.800999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-130.309998, 54.320999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-2.971, 53.423]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [22.311001, 48.622002]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [100.123001, 46.692001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-66.068001, 45.264]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [38.960999, 45.036999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [34.104, 44.962002]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [42.063, 44.282001]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [71.371002, 42.889]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [109.807999, 40.659]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [23.653, 37.944]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [39.173, 21.542999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-96.123001, 19.184999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [42.507999, 18.219999]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-15.978, 18.084]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [74.843002, 12.869]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-10.797, 6.301]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [7.068, 6.215]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [9.454, 0.391]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [15.299, -4.321]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [34.743999, -4.817]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-77.044998, -12.082]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-57.283001, -25.406]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-71.332001, -29.959]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [46.659145, 61.259964]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [174.80722, -41.334835]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [86.599289, 67.493851]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [177.480255, 64.755272]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [17.991455, 59.331165]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [76.280418, 9.970155]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-60.281559, 53.29509]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-2.674783, 42.850159]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-68.541466, 63.755356]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [51.141739, 43.690456]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [20.412556, 44.799683]
            }
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [19.4, 42.5]
            }
          }
        ]
      };
      var heatData2 = {
          type: "FeatureCollection",
        features: [
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [118.9645196, 42.2675427]
            }
          },{
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [118.9445196, 42.2575427]
            }
          },{
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [118.9745196, 42.2675427]
            }
          },{
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [118.9655196, 42.2575427]
            }
          },{
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [118.9445196, 42.2475427]
            }
          },{
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [118.9645196, 42.2375427]
            }
          },{
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [118.9545196, 42.2275427]
            }
          },{
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [118.9545196, 42.2676427]
            }
          },{
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [118.9645196, 42.2375427]
            }
          },{
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [118.9545196, 42.2275427]
            }
          },{
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [118.954596, 42.267647]
            }
          },{
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [118.964516, 42.237527]
            }
          },{
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [118.954516, 42.227547]
            }
          },{
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [118.954519, 42.267427]
            }
          }]
      }
     
    //   var raster = new ol.layer.Tile({
    //     source: new ol.source.Stamen({
    //       layer: "toner"
    //     })
    //   });
      var map = new ol.Map({
        layers: [
          new ol.layer.Tile({
            preload: 4,
            source: new ol.source.OSM()
          })
        ],
        target: "heatmap",
        view: new ol.View({
          center: ol.proj.transform(
            config.map.center,
            "EPSG:4326",
            "EPSG:3857"
          ),
          zoom: 11,
          maxZoom: config.map.maxZoom,
          minZoom: 5
        }),
      });

    //   var blur = document.getElementById("blur");
    //   var radius = document.getElementById("radius");
      var vectorSource = new ol.source.Vector({
        features: new ol.format.GeoJSON().readFeatures(heatData2, {
          dataProjection: "EPSG:4326",
          featureProjection: "EPSG:3857"
        })
      });
      // Heatmap����ͼ
      var vector = new ol.layer.Heatmap({
        source: vectorSource,
        // blur: parseInt(blur.value, 10),
        // radius: parseInt(radius.value, 10)
      });
      map.addLayer(vector);
    }
  },
  mounted(){
      this.init()
  }
};
</script>

<style lang="scss">
.map{
    position: absolute;
    top: 0;
    left:0;
    bottom: 0;
    right: 0;
}
</style>


