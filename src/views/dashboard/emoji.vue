<template>
  <div :id="id" :class="className" :style="{ height: height, width: width }" />
</template>

<script>
import echarts from "echarts";
import { get_top_emoji } from "./api";

export default {
  name: "Emoji",
  props: {
    className: {
      type: String,
      default: "chart",
    },
    id: {
      type: String,
      default: "chart",
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
      emojis_list: [],
      emojis_count: [],
    };
  },
  mounted() {
    this.fetch_data();
  },
  beforeDestroy() {
    if (!this.chart) {
      return;
    }
    this.chart.dispose();
    this.chart = null;
  },
  methods: {
    fetch_data() {
      let $this = this;
      get_top_emoji().then(function (res) {
        $this.emojis_list = res.data.list;
        $this.emojis_count = res.data.count;
        $this.initChart()
      });
    },

    initChart() {
      let echarts = echarts__WEBPACK_IMPORTED_MODULE_0__;
      this.chart = echarts.init(document.getElementById(this.id));

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
        xAxis: {
          type: "value",
          boundaryGap: [0, 0.01],
        },
        yAxis: {
          type: "category",
          data: this.emojis_list,
        },
        series: [
          {
            name: "2021年",
            type: "bar",
            data: this.emojis_count,
          },
        ],
      };
      this.chart.setOption(options);
    },
  },
};
</script>