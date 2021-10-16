import axios from "axios";
import { apiBase } from "./api/api-base";

class UserLogic {

    async login(user) {
        const result = await apiBase.postDataUsingSimplePostCall(user);

    }
}

export const userLogic = new UserLogic();
