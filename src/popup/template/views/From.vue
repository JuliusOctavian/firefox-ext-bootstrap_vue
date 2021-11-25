<template>
  <div class="form">
    <form action="" class="">
      <div class="form-item">
        <label for="address"><i class="fas fa-user"></i>address:</label>
        <input type="text" v-model="formData.address">
      </div>
      <div class="form-item">
        <label for="port">port:</label>
        <input type="text" v-model.number="formData.port">
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import {Vue, Component, Watch} from "vue-property-decorator";

interface FormData {
  address: string;
  port: number
}

@Component({
  components: {}
})
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

  // eslint-disable-next-line class-methods-use-this
  @Watch("formData", {deep: true})
  onFormDataChange(formData: FormData) {
    if (formData) {
      browser.runtime.sendMessage(
          "addon@example.com",
          {name: "FORM", data: {formData}, dst: "background"}
      ).then(() => {
        console.log("send msg success");
      }).catch(err => {
        console.log("send msg err:", err);
      })
    }
  }

  get isAddressValid() {
    return /(192).(168)(\.((2(5[0-5]|[0-4]\d))|[0-1]?\d{1,2})){2}/.test(this.formData.address);
  }

  get isPortValid() {
    return this.formData.port > 0 && this.formData.port < 65536
  }
}
</script>

<style lang="scss" scoped>
.form {
  form {
    .form-item {
      label {
        display: block;
      }

      input {
        width: 100%;
      }
    }
  }
}
</style>