import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:3000/',
});

// Interceptor trước khi gửi yêu cầu
instance.interceptors.request.use(
    config => {
      const token = localStorage.getItem('token'); // Lấy token từ local storage hoặc nơi khác
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    error => {
      return Promise.reject(error);
    }
  );

export default instance;