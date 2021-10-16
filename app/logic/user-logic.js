import axios from "axios";
import { apiBase } from "./api/api-base";

class UserLogic {
    login = (user) => {
        return apiBase.postRequest("authentication", user);

    }

    save = (user) => {
        return apiBase.postRequest("users", user);

    }

}

export const userLogic = new UserLogic();
