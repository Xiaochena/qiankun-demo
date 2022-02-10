<template>
  <div class="home">
    <Card dis-hover class="center">
      <div class="center">
        <img src="../assets/i-view-logo.png" />
        <h3>A high quality UI Toolkit based on Vue.js</h3>
      </div>
    </Card>

    <Card dis-hover>
      <div id="main-vue" />
    </Card>

    <Card dis-hover class="center overflow-auto">
      <div id="main-react" />
    </Card>

    <Card dis-hover class="center">
      <div id="main-static" />
    </Card>
  </div>
</template>

<script>
import { loadMicroApp } from "qiankun";

export default {
  name: "Main",
  components: {},
  data() {
    return { microStatic: null, microReact: null, microVue: null };
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
    this.microVue = loadMicroApp({
      name: "VueMicroMain",
      entry: "//localhost:9090",
      container: "#main-vue",
      props: { VueRouter: { base: "/main" } },
    });
  },

  beforeRouteLeave(to, from, next) {
    const { microReact, microStatic, microVue } = this;
    const allSettledPromise = Promise.allSettled([
      microReact?.unmount(),
      microStatic?.unmount(),
      microVue?.unmount(),
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
  .overflow-auto {
    overflow: auto;
  }
}
</style>
