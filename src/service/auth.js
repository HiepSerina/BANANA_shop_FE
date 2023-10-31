import axios from "./axios";

const getInfoUser = async() => {
    try {
        var result = await axios.get("user/info");
        return result;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

const loginApi = async(data) => {
    try {
        var result = await axios.post("login",data);
        return result;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

const signUp = async(data) => {
    try {
        var result = await axios.post("signup",data);
        return result;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export {loginApi, getInfoUser, signUp}