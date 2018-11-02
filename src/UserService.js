import {AxiosInstance} from "axios";

class UserService {
	static usersPromise = () => {
		return AxiosInstance.get(UserService._getUsersApi());
	}

	static users = async () => {
		let data = await UserService.usersPromise();
		return data;
	}

	static _getUsersApi(){
		return "https://reqres.in/api/users?page=1"
	}
}