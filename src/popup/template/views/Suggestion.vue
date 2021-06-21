<template>
  <div class="suggestion">
    <ul v-if="suggestions.length">
      <li v-for="(sug,i) in suggestions" :key="i">{{ sug }}</li>
    </ul>
    <div v-else class="empty-list">
      <span>empty here!</span>
    </div>
  </div>
</template>

<script lang="ts">
import {Vue, Component} from "vue-property-decorator";

@Component
export default class Suggestion extends Vue {
  private suggestions: Array<string> = [];

  created() {
    browser.runtime.sendMessage(
        "addon@example.com",
        {name: this.$options.name, data: {}, des: "get"}
    ).then((res: Array<string>) => {
      this.suggestions = res;
    }).catch(err => {
      console.log(err);
    })
  }
}
</script>

<style lang="scss" scoped>
div.suggestion {
  width: 100px;
  height: 50px;
  > ul {
    list-style: none;
    li {
      color: lightblue;
    }
  }

  > .empty-list{
    height: 100px;
  }
}
</style>