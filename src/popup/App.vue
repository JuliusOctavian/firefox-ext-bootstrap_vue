<template>
  <div class="app">
    <Home/>
  </div>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";
import Home from "@/popup/views/Home.vue";

@Options({
  components: {
    Home
  }
})
export default class App extends Vue {
  created(){
  }
}
</script>

<style lang="scss">
$fa-font-path: '~@fortawesome/fontawesome-free/webfonts';

@import "~@fortawesome/fontawesome-free/scss/fontawesome";
@import "~@fortawesome/fontawesome-free/scss/solid";
@import "~@fortawesome/fontawesome-free/scss/brands";

* {
  margin: 0;
  padding: 0;
}

body {
  background-color: bisque;

  z-index: 99999;
  overflow: hidden;

  padding: 10px;
  user-select: none;

  box-shadow: 10px 10px 10px #888888;

  .app {
    width: 400px;
    height: 350px;
  }
}
</style>
