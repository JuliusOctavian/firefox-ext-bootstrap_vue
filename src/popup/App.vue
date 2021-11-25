<template>
  <div class="app">
    <Form/>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import Form from "@/template/views/From.vue";

@Component({
  components: {
    Form
  }
})
export default class App extends Vue {
  // eslint-disable-next-line class-methods-use-this
  beforeCreate() {
    document.oncontextmenu = function (event) {
      event.preventDefault();
    };
  }
}
</script>

<style lang="scss">
$fa-font-path: '~@fortawesome/fontawesome-free/webfonts';

@import "~@fortawesome/fontawesome-free/scss/fontawesome";
@import "~@fortawesome/fontawesome-free/scss/solid";
@import "~@fortawesome/fontawesome-free/scss/brands";
@import "~@fortawesome/fontawesome-free/scss/regular";
@import "~@fortawesome/fontawesome-free/scss/shims";

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
