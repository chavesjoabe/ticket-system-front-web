import axios from "axios";

class UserService {
  headers = () => {
    const storedUser = localStorage.getItem("user");
    const loggedUserData = JSON.parse(storedUser);
    const token = loggedUserData.access_token;
    return {
      Authorization: `Bearer ${token}`,
    };
  };

  async findOneUser(id) {
    const { data } = await axios.get(`${process.env.REACT_APP_USER_API_URL}/id/${id}`, {
      headers: this.headers(),
    });
    return data;
  }
}
export default new UserService();
