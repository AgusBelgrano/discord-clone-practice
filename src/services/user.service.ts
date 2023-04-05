import axios from 'axios';
import { User } from '../interfaces/user.interface';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8080/users'
});

class UserService {
    loginUser(body: any) {
        return axiosInstance.post('/auth', body);
    }

    registerUser(body: User) {
        return axiosInstance.post('/register', body);
    }
}

export default new UserService();