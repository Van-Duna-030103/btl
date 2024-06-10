// services/authService.js
import axios from 'axios';

const API_URL = 'https://your-api-url.com/api/auth/';

const login = async (username, password) => {
  const response = await axios.post(API_URL + 'login', { username, password });
  if (response.data.accessToken) {
    // Lưu token vào AsyncStorage hoặc SecureStore nếu cần thiết
  }
  return response.data;
};

const authService = {
  login,
};

export default authService;
