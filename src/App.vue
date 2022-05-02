<template>
  <div id="app">
    <nav class="navigation">
      <img class="vueLogo" alt="Vue logo" src="./assets/logo.png" />
    </nav>
    <HelloWorld />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
};
</script>

<style lang="scss">
html,
body {
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.navigation {
  text-align: center;
  padding: 10px 40px;
  background: #f0f0f0;
}

.vueLogo {
  width: 40px;
}
</style>
