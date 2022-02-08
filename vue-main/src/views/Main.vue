<template>
  <div class="home">
    <Card dis-hover class="center">
      <div class="center">
        <img src="../assets/i-view-logo.png" />
        <h3>A high quality UI Toolkit based on Vue.js</h3>
      </div>
    </Card>

    <Card dis-hover class="center">
      <div id="main-react" />
    </Card>

    <Card dis-hover class="center">
      <div id="main-static" />
    </Card>
    <Card dis-hover>
      <div style="text-align: center">
        <img src="../assets/i-view-logo.png" />
        <h3>A high quality UI Toolkit based on Vue.js</h3>
      </div>
    </Card>
  </div>
</template>

<script>
import { loadMicroApp } from "qiankun";

export default {
  name: "Main",
  components: {},
  data() {
    return { microStatic: null, microReact: null };
  },
  mounted() {
    this.microStatic = loadMicroApp({
      name: "StaticMicroMain",
      entry: "//localhost:6060",
      container: "#main-static",
    });
    this.microReact = loadMicroApp({
      name: "ReactMicroMain",
      entry: "//localhost:7070",
      container: "#main-react",
    });
  },

  beforeRouteLeave(to, from, next) {
    const { microReact, microStatic } = this;
    const allSettledPromise = Promise.allSettled([
      microReact?.unmount(),
      microStatic?.unmount(),
    ]);
    allSettledPromise.then(() => {
      next();
    });
  },
};
</script>

<style lang="less" scoped>
.home {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  height: 100%;
  .center {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
</style>
