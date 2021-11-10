import axios from "axios";
import { apiBase } from "./api/api-base";

class UserLogic {
  login = (user) => {
    return apiBase.postRequest("authentication", user);
  };

  save = (user) => {
    return apiBase.postRequest("users", user);
  };

  getUser = (userId) => apiBase.getRequest("users/" + userId);

  search = (search, uid) =>
    apiBase.postRequest("users/SearchUser", search, uid);
}

export const userLogic = new UserLogic();
