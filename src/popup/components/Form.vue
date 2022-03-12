<template>
  <div class="form">
    <form action="" class="">
      <div class="form-item">
        <label for="address">address:</label>
        <input type="text" v-model="concept.formData.address">
      </div>
      <div class="form-item">
        <label for="port">port:</label>
        <input type="text" v-model="concept.formData.port">
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import {Options, Vue, setup} from "vue-class-component";
import {onMounted, reactive, ref, watch} from "vue";

interface FormData {
  address: string;
  port: number | string
}

@Options({})
export default class Form extends Vue {
  concept = setup(() => {
    const formData = reactive<FormData>({
      address: "",
      port: "1"
    });

    watch(formData,(val)=>{
      console.log("formData",val)
    },{deep:true});

    // browser.storage.local.get("formData").then((res) => {
    //   if(res){
    //     const {address,port} = res;
    //
    //     formData.address = address;
    //     formData.port = port;
    //   }
    // }).catch(err => {
    //   console.log(err)
    // });


    return {
      formData
    }
  });

  // get isAddressValid() {
  //   return /(192).(168)(\.((2(5[0-5]|[0-4]\d))|[0-1]?\d{1,2})){2}/.test(this.formData.address);
  // }
  //
  // get isPortValid() {
  //   return this.formData.port > 0 && this.formData.port < 65536
  // }
}
</script>

<style lang="scss">
div.form {
  position: relative;

  form {
    .form-item {
      label {
        display: inline-block;
        width: 20%;
      }

      input {
        margin-left: 10%;
        width: 70%;
        height: 24px;
        box-sizing: border-box;
        padding: 2px;
      }
    }
  }
}
</style>