/* eslint-disable */

declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

declare module "*.png" {
  const value: any;
  export = value;
}

declare module "*.gif" {
  const value: any;
  export = value;
}

declare module "vue/dist/vue.esm-bundler.js";
declare module "vue-pinch";
