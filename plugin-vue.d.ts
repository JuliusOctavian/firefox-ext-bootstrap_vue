import "@vue/runtime-core";

declare module "@vue/runtime-core" {
  import { AxiosStatic } from "axios";
  interface ComponentCustomProperties {
    $http: AxiosStatic;
  }
}