import { apiBase } from "./api/api-base";

class EventLogic {

    getEvents = (userId) => apiBase.getRequest("activities/GetAllFriendsActivities/" + userId);

    getCategories = async () => {
        const result = await apiBase.getRequest("categories");
        return await result?.data?.map((d) => this.mapSelectModel(d)) ?? [];
    }


    mapSelectModel = (value) => {
        return { value: value.key, text: value.value };
    }

    saveEvent = (value) => {
        return apiBase.postRequest("activities", value)
    }

}

export const eventLogic = new EventLogic();