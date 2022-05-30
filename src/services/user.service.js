import axios from "axios";

class UserService {
  headers = (token) => {
    return {
      Authorization: `Bearer ${token}`,
    };
  };

  async createUser(user) {
    const { data } = await axios.post(process.env.REACT_APP_USER_API_URL, user);

    return data;
  }
}

export default new UserService();
