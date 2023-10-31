<template>
    <div class="container-login">
        <div class="login">
            <div class="login-left">
                <h2>Scan to log in</h2>
                <img src="data:image/png;base64,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"
                    alt="">
            </div>
            <div class="login-right">
                <h2>Login</h2>
                <div>
                    <label for="username">Username</label>
                    <input type="text" placeholder="Username" v-model="userName" id="username">
                </div>
                <div>
                    <label for="password">Password</label>
                    <input type="password" placeholder="Password" v-model="passWord" id="password">
                </div>
                <div v-if="loginFalse">Tài khoản hoặc mật khẩu không chính xác</div>
                <button @click="loginApi">Login</button>
            </div>
            <strong style="margin-right: 10px ; cursor: pointer;" @click="this.$emit('close-login')">X</strong>
        </div>
    </div>
</template>

<script>
import { loginApi } from "../../../service/auth"
export default {
    name: "TheLogin",
    data() {
        return {
            userName: null,
            passWord: null,
            loginFalse: false
        }
    },
    methods: {
        async loginApi() {
            try {
                var result = await loginApi({ username: this.userName, password: this.passWord });
                localStorage.setItem('token', result.data.accessToken);
                this.$emit('login-success', this.userName);
                this.$emitter.emit("showToast", "Logged successfully");
            }
            catch (er) {
                console.log(er);
                this.loginFalse = true;
            }
        }
    }
}
</script>

<style scoped>
.container-login {
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
    background-color: rgba(0, 0, 0, .4);
    width: 100vw;
    height: 100vh;
}

.login {
    background-color: #fff;
    width: 40%;
    display: flex;
    padding: 24px 0px;
}

.login-left {
    width: 35%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: column;
    border-right: 1px solid gray;
    box-sizing: border-box;
}

.login-right {
    width: 65%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: column;
    box-sizing: border-box;
    padding: 0px 8%;
}

.login-right div{
    width: 100%;
}

input,
button {
    width: 100%;
    height: 38px;
    padding: 8px 16px;
    margin: 8px 0px;
    border-radius: 4px;
    border: 1px solid gray;
    box-sizing: border-box;
}

input:focus {
    outline: 1px solid green;
    border: none;
}

button {
    height: 40px;
    background: #e63131 !important;
    color: #fff;
    font-size: 24px;
    line-height: 24px;
}
</style>