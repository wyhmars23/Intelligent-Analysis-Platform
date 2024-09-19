<template>
  <div class="page">
    <h1>Institution Statistics Graph</h1>
    <div ref="chartDom" class="picture"></div>
  </div>
</template>

<script setup>
  import { onMounted, onUnmounted, ref } from 'vue';
  import * as echarts from 'echarts/core';
  import { GridComponent } from 'echarts/components';
  import { BarChart } from 'echarts/charts';
  import { CanvasRenderer } from 'echarts/renderers';

  echarts.use([GridComponent, BarChart, CanvasRenderer]);

  const chartDom = ref(null);
  let myChart = null;

  const option = {
    xAxis: {
      type: 'category',
      data: ['赵一', '钱二', '孙三', '李四', '周五', '吴六', '郑七'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: [120, 200, 150, 80, 70, 110, 130],
        type: 'bar',
      },
    ],
  };

  onMounted(() => {
    // eslint-disable-next-line no-console
    console.log(chartDom.value);
    if (chartDom.value) {
      myChart = echarts.init(chartDom.value);
      myChart.setOption(option);
    }
  });

  onUnmounted(() => {
    if (myChart) {
      myChart.dispose();
    }
  });
</script>

<style scoped lang="less">
  .page {
    display: flex;
    flex-direction: column;
    width: 1264px;
    height: auto;
    background-color: rgb(248, 247, 247);
  }

  h1 {
    display: flex;
    font-size: 40px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    color: black;
    justify-content: center; /* 水平居中 */
    padding: 20px;
  }

  .picture {
    display: flex;
    width: 600px;
    height: 400px;
    margin: 20px auto;
  }
</style>
