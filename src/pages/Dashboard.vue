<template>
  <div class="row">
    <div class="col-12">
      <card type="chart">
        <template slot="header">
          <div class="row">
            <div class="col-sm-6 text-left">
              <h5 class="card-category">Performance</h5>
              <h2 class="card-title">CPU Usage</h2>
            </div>
            <div class="col-sm-6">
              <div class="btn-group btn-group-toggle float-right"
                   data-toggle="buttons">
                <label v-for="(option, index) in bigLineChartCategories"
                       :key="option"
                       class="btn btn-sm btn-primary btn-simple"
                       :class="{active: bigLineChart.activeIndex === index}"
                       :id="index">
                  <input type="radio"
                         @click="initBigChart(index)"
                         name="options" autocomplete="off"
                         :checked="bigLineChart.activeIndex === index">
                  {{option}}
                </label>
              </div>
            </div>
          </div>
        </template>
        <div class="chart-area">
          <line-chart style="height: 100%"
                      ref="bigChart"
                      chart-id="big-line-chart"
                      :chart-data="bigLineChart.chartData"
                      :gradient-colors="bigLineChart.gradientColors"
                      :gradient-stops="bigLineChart.gradientStops"
                      :extra-options="bigLineChart.extraOptions">
          </line-chart>
        </div>
      </card>
    </div>
  </div>
</template>
<script>
  import config from "@/config";
  import * as chartConfigs from "@/components/Charts/config";
  import LineChart from "@/components/Charts/LineChart";

  export default {
    components: {LineChart},
    data() {
      return {
        bigLineChart: {
          allData: [
            [100, 70, 90, 70, 85, 60, 75, 60, 90, 80, 110, 100],
            [80, 120, 105, 110, 95, 105, 90, 100, 80, 95, 70, 120],
            [60, 80, 65, 130, 80, 105, 90, 130, 70, 115, 60, 130]
          ],
          activeIndex: 0,
          chartData: {
            datasets: [{ }],
            labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
          },
          extraOptions: chartConfigs.purpleChartOptions,
          gradientColors: config.colors.primaryGradient,
          gradientStops: [1, 0.4, 0],
          categories: []
        }
      }
    },
    computed: {
      bigLineChartCategories() {
        return [
          "Utilization",
          "Speed"
        ];
      },
    },
    methods: {
      initBigChart(index) {
        let chartData = {
          datasets: [{
            fill: true,
            borderColor: config.colors.primary,
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: config.colors.primary,
            pointBorderColor: 'rgba(255,255,255,0)',
            pointHoverBackgroundColor: config.colors.primary,
            pointBorderWidth: 20,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 4,
              data: this.bigLineChart.allData[index]
          }],
          labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
        }
        this.$refs.bigChart.updateGradients(chartData);
        this.bigLineChart.chartData = chartData;
        this.bigLineChart.activeIndex = index;
      }
    },
    mounted() {
      this.i18n = this.$i18n;
      this.initBigChart(0);
      this.$options.sockets.onmessage = (message) => console.log(message.data);
    }
  };
</script>
<style>
</style>
