import axios from 'axios';

class LoginService {
    // request = axios.create('http://localhost:9000');
    async login(user) {
        try {
            const { data: loggedUser } = await axios.post(
                process.env.REACT_APP_AUTH_API_URL,
                user
            );
            return loggedUser;
        } catch (error) {
            console.error('Error on Login process', error);
            throw new Error(error.message);
        }
    }
}

export default new LoginService();
