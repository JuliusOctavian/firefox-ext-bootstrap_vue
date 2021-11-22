<template>
  <div class="app">
    <Form />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Form from "./template/views/From.vue";

@Component({
  components: {
    Form
  }
})
export default class App extends Vue {
  beforeCreate() {
    document.oncontextmenu = function(event) {
  event.preventDefault();
    };
  }
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}

body {
  z-index: 99999;
  overflow: hidden;
}

.app {
  width: 500px;
  height: 350px;
}
</style>
