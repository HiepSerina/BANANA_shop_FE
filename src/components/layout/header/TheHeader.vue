<template>
    <div class="header-content">
        <div class="header-logo" @click="goToHome">
            BANANA
        </div>
        <div class="header-menu">
            <router-link to="/">
                <a><strong>Home</strong></a>
            </router-link>
            <router-link to="/market">
                <a><strong>Market</strong></a>
            </router-link>
            <router-link to="/news">
                <a><strong>News</strong></a>
            </router-link>
        </div>
        <div class="login">
            <!-- Chưa đăng nhập  -->
            <strong v-if="!isLogin" @click="this.$emit('login')" >Login</strong>
            <strong v-if="!isLogin" @click="this.$emit('signup')" style="margin-left: 16px;">Register</strong>
            <!-- Đã đăng nhập -->
            <b  v-if="isLogin">Hi, {{ userName || name }}</b>
            <!-- User -->
            <strong style="margin-left: 16px;" v-if="isLogin" @click="viewCart">View Cart</strong>
            <!-- Admin -->
            <strong style="margin-left: 16px;" v-if="this.$root.isAdmin" @click="this.$router.push('/admin')">View Cart</strong>
            <strong style="margin-left: 16px;" v-if="isLogin" @click="logOut">Logout</strong>
        </div>
    </div>
</template>

<script>
import { getInfoUser } from '../../../service/auth';
export default {
    name: "TheHeader",
    props:["userName","modelValue"],
    data() {
        return {
            isLogin:false,
            name: "",
        }
    },
    async created(){
        try {
            const res = await getInfoUser();
            this.isLogin = true;
            this.name = res.data.userName;
            if(res.data?.admin === "admin"){
                this.$root.isAdmin = true;
            }
        } catch (error) {}
        
    },
    watch:{
        modelValue: function(){
            this.isLogin = this.modelValue;
        }
    },
    methods:{
        goToHome(){
            this.$router.push('/');
        },

        logOut(){
            this.$root.isLogin = false;
            this.isLogin = false;
            localStorage.clear();
            this.$router.push('/');
            this.$emitter.emit("showToast", "Signed out");
        },

        viewCart(){
            this.$router.push("/cart");
        }
    }
}
</script>

<style scoped>
.header-content{
    /* width: 100vw; */
    height: 70px;
    background: #ededed url(https://buff.163.com/static/images/site/header-bg.jpg) no-repeat center top;
    background-image: cover ;
    color: #FFF;
    display: flex;
    align-items: center;
    box-sizing: border-box;
}

.header-logo{
    padding: 0px 36px;
    font-size: 24px ;
    cursor: pointer;
}

.header-menu{
    display: flex;
}

.header-menu a{
    padding: 0px 4px;
    font-size: 16px;
    cursor: pointer;
    color: #FFF;
    height: 68px;
    display: flex;
    align-items: center;
    text-decoration: none;
}

.router-link-active{
    border-bottom: 2px solid #4886ff;
}

.login{
    margin-left: auto ;
    padding: 0px 36px;
}

strong{
    cursor: pointer;
}
</style>