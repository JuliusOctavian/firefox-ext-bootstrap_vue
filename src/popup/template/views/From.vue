<template>
  <div class="form">
    <form action="">
      <label for="">地址:</label><input type="text" v-model="formData.address">
      <br>
      <label for="">端口:</label><input type="text" v-model.number="formData.port">
    </form>
  </div>
</template>

<script lang="ts">
import {Vue, Component, Watch} from "vue-property-decorator";

interface FormData {
  address: string;
  port: number
}

@Component
export default class Form extends Vue {
  private formData: FormData = {
    address: "",
    port: 0
  };

  created() {
    browser.storage.local.get("formData").then(res => {
      const {formData} = res;
      if (formData) {
        this.formData = formData as FormData;
      }
    });
  }

  @Watch("formData", {deep: true})
  onFormDataChange(formData: FormData) {
    if (formData) {
      browser.runtime.sendMessage(
          "addon@example.com",
          {name: "FORM", data: {formData}, dst: "background"}
      ).then(res => {
        console.log("send msg:", res);
      }).catch(err => {
        console.log("send msg err:", err);
      })
    }
  }
}
</script>

<style lang="scss">
  div.form{
    form{

    }
  }
</style>