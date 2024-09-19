<template>
  <div id="app">
    <header>
      <span class="title1">科技信息资源汇聚与智能分析平台</span>
      <span class="title2"
        ><a-space>
          <a-link href="/Data-Search" style="color: aliceblue">数据检索</a-link>
        </a-space></span
      >
      <span class="history">
        <a-space>
          <a-link href="/Data-storage" style="color: aliceblue"
            >数据存储</a-link
          >
        </a-space>
      </span>
    </header>
    <main>
      <h1>历史记录</h1>
      <div>
        <div v-for="item in items" :key="item.id" class="item">
          <h3>{{ item.mainQuestion }}</h3>
          <div class="details">
            <p
              >ID: <span>{{ item.id }}</span></p
            >
            <p
              >Type: <span>{{ item.type }}</span></p
            >
            <p
              >Search Count: <span>{{ item.searchCount }}</span></p
            >
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script lang="ts" setup>
  import { useRouter } from 'vue-router';
  import { ref } from 'vue';

  const router = useRouter();
  interface Item {
    id: number;
    mainQuestion: string;
    type: string;
    searchCount: number;
  }

  const items = ref<Item[]>([
    {
      id: 1,
      mainQuestion: 'What is Vue.js?',
      type: 'Framework',
      searchCount: 2000,
    },
    {
      id: 2,
      mainQuestion: 'How to use v-for?',
      type: 'Directive',
      searchCount: 1500,
    },
    {
      id: 3,
      mainQuestion: 'What are the benefits of Vue.js?',
      type: 'Framework',
      searchCount: 3000,
    },
  ]);
</script>

<style scoped lang="less">
  /* 确保body和html的高度为100%，这是可选的，但有助于确保header的正确布局 */
  html,
  body {
    margin: 0;
    padding: 0;
    height: 100%;
  }

  #app {
    height: 100%; /* 使Vue应用的根元素高度为100% */
    display: flex; /* 使用flex布局 */
    flex-direction: column; /* 设置为列方向，从上到下排列子元素 */
  }

  header {
    background-color: rgb(40, 37, 37); /* 深灰色背景 */
    color: #fff; /* 白色文字 */
    padding: 10px 0; /* 上下内边距 */
    flex: 0 0 8vh; /* 使用flex属性来固定header的高度为视口高度的10% */
    display: flex; /* 使得header内的内容也可以flex布局 */
    align-items: center; /* 垂直居中 */
  }

  main {
    flex-grow: 1; /* 使main元素占据剩余的空间 */
    padding: 15px; /* 内边距 */
    text-align: center; /* 文本居中 */
    display: flex; /* 使用flex布局 */
    flex-direction: column; /* 设置为列方向，从上到下排列子元素 */
  }

  .title1 {
    display: inline-block;
    padding-left: 30px;
    font-size: 20px;
    font-family: '微软雅黑', serif;
  }

  .title2 {
    display: inline-block;
    padding-left: 65%;
  }

  .history {
    display: inline-block;
    padding-left: 3%;
  }

  h1 {
    text-align: center;
    margin-bottom: 30px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: 40px;
    color: rgb(112, 171, 221);
  }

  .item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    padding: 10px;
    border: 2px solid #6a9bc1;
    border-radius: 5px;
  }

  h3 {
    margin: 0;
  }

  .details {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    align-items: center;
  }

  .details p {
    margin: 0;
  }

  .details span {
    font-weight: bold;
  }
</style>
