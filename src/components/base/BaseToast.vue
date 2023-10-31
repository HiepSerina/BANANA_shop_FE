<template>
    <div class="toast-message" v-if="show">
      {{ message }}
    </div>
  </template>
  
  <script>
  export default {
    created(){
      this.$emitter.on("showToast", this.showToast);
    },
    data() {
      return {
        show: false,
        message: "",
      };
    },
    methods: {
      showToast(message, duration = 3000) {
        this.message = message;
        this.show = true;
        setTimeout(() => {
          this.hideToast();
        }, duration);
      },
      hideToast() {
        this.show = false;
        this.message = '';
      }
    }
  };
  </script>
  
  <style scoped>
  .toast-message {
    position: fixed;
    top: 90px;
    right: 20px;
    background-color: #333;
    color: #fff;
    padding: 10px 20px;
    border-radius: 5px;
    z-index: 1000;
  }
  </style>
  