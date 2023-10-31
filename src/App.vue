<template>
  <div>
    <TheHeader @login="() => { this.isShowLogin = true }" @signup="() => { this.isShowSignUp = true }"
      :userName="userName" v-model="this.$root.isLogin" />
    <TheContent />
    <TheFooter />
    <TheLogin v-if="isShowLogin" @login-success="loginSuccess" @close-login="() => { this.isShowLogin = false }" />
    <TheSignUp v-if="isShowSignUp" @close-signup="() => { this.isShowSignUp = false }" />
  </div>
</template>

<script>
import TheContent from './components/layout/content/TheContent.vue';
import TheHeader from './components/layout/header/TheHeader.vue';
import TheFooter from './components/layout/footer/TheFooter.vue';
import TheLogin from './components/layout/content/TheLogin.vue';
import TheSignUp from './components/layout/content/TheSignUp.vue';
export default {
  name: "App",
  components: {
    TheContent,
    TheHeader,
    TheLogin,
    TheSignUp,
    TheFooter
  },
  data() {
    return {
      isShowLogin: false,
      isShowSignUp: false,
      userName: null
    }
  },
  methods: {
    loginSuccess(data) {
      this.isShowLogin = false;
      this.userName = data;
      this.$root.isLogin = true;
    }
  }
}
</script>

<style>
@import url("./style/main.css");

#app {
  position: relative;
}
</style>

