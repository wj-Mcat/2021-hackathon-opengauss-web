<template>
  <div
    :id="top_id"
    :class="className"
    :style="{ height: height, width: width }"
  />
</template>

<script>
import echarts from "echarts";
import { get_top_person } from "./api";

export default {
  name: "Top",
  props: {
    className: {
      type: String,
      default: "chart",
    },
    top_id: {
      type: String,
      default: "top_id",
    },
    width: {
      type: String,
      default: "100%",
    },
    height: {
      type: String,
      default: "400px",
    },
  },
  data() {
    return {
      chart: null,
      names: [],
      count: []
    };
  },
  mounted() {
      this.fetch_data()
  },
  beforeDestroy() {
    if (!this.chart) {
      return;
    }
    this.chart.dispose();
    this.chart = null;
  },
  methods: {
      fetch_data(){
          let $this = this;
          get_top_person().then(function(res){                   
              $this.names = res.data.names
              $this.count = res.data.count
              $this.initChart()
          })
      },
    initChart() {
      let echarts = echarts__WEBPACK_IMPORTED_MODULE_0__;
      this.chart = echarts.init(document.getElementById(this.top_id));

      let options = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        yAxis: {
          type: "value",
          boundaryGap: [0, 0.01],
        },
        xAxis: {
          type: "category",
          data: this.names,
        },
        series: [
          {
            name: "2021年",
            type: "bar",
            data: this.count
          },
        ],
      };
      this.chart.setOption(options);
    },
  },
};
</script>