<template>
  <div id="main-app">
    <Menu
      theme="dark"
      class="menu"
      :active-name="'/' + $route.path.split('/')[1]"
    >
      <MenuItem name="/main" to="/main">
        <Icon type="md-document" />
        Main
      </MenuItem>
      <MenuItem name="/vue" to="/vue">
        <Icon type="md-chatbubbles" />
        Vue
      </MenuItem>
      <MenuItem name="/react" to="/react">
        <Icon type="md-chatbubbles" />
        React
      </MenuItem>
      <MenuItem name="/static" to="/static">
        <Icon type="md-chatbubbles" />
        Static
      </MenuItem>
    </Menu>
    <main>
      <router-view v-show="$route.name" />
      <div v-show="!$route.name" id="frame" />
    </main>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="less" scoped>
#main-app {
  height: 100vh;
  width: 100vw;
  display: flex;
  .menu {
    height: 100vh;
  }
  main {
    height: 100vh;
    overflow: auto;
    width: calc(100vw - 240px);
  }
}
</style>
