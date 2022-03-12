<template>
  <div class="app">
    <form action="">
      <label for="">Name:</label>
      <input type="text">
    </form>
  </div>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";

@Options({
})
export default class App extends Vue {
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
  z-index: 99999;
  overflow: hidden;

  padding: 10px;
  user-select: none;

  .app {
    width: 500px;
    height: 350px;
  }
}
</style>
