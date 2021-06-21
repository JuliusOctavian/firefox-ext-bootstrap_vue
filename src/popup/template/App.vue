<template>
  <div class="app">
<!--    <Suggestion/>-->
    <Form />
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import Suggestion from "./views/Suggestion.vue";
import Form from "./views/From.vue";

@Component({
  components: {
    Suggestion,
    Form
  }
})
export default class App extends Vue {

  beforeCreate() {
    document.oncontextmenu = function (event) {
      event.preventDefault();
    }
  }
}
</script>

<style lang="scss">
  *{
    margin: 0;
    padding: 0;
  }

  body{
    z-index: 99999;
    overflow: hidden;
  }

  .app{
    width: 500px;
    height: 350px;
  }
</style>