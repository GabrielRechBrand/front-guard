export default {
  install(Vue) {
    let app = new Vue({
      data() {
        return {
          isRTL: false
        }
      },
      methods: {
      }
    });

    Vue.prototype.$rtl = app;
  }
}
