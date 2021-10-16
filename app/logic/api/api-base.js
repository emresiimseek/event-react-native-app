import axios from "axios";

class ApiBase {
    async postDataUsingSimplePostCall(user) {
        return await axios
            .post('http://10.0.2.2:52264/api/authentication', user)
            .then(function (response) {
                // handle success
                console.log(response.data);
                return response.data;
            })
            .catch(function (error) {
                // handle error
                alert(error);
                return error.message;
            });
    };
}

export const apiBase = new ApiBase();