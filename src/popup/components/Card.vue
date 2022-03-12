<template>
  <div class="card">
    <div>
      <span v-text="concept.message"></span>
    </div>
  </div>
</template>

<script lang="ts">
import {Options, setup, Vue} from "vue-class-component";
import {ref} from "vue";

@Options({})
export default class Card extends Vue {
  private concept = setup(() => {
    const message = ref("Vue3 firefox extension");
    return {
      message
    }
  });
}
</script>

<style scoped>

</style>