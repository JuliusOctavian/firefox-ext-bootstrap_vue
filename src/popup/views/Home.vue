<template>
  <div class="home">
    <!--    <Form/>-->
    <Card/>
  </div>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";

import Form from "@/popup/components/Form.vue";
import Card from "@/popup/components/Card.vue";

@Options({
  components: {
    Form,
    Card
  }
})
export default class Home extends Vue {
}
</script>

<style lang="scss">
div.home {
  position: relative;


}
</style>