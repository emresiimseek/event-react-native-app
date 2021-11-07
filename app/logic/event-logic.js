import { apiBase } from "./api/api-base";

class EventLogic {

    getEvents = (userId) => apiBase.getRequest("activities/GetAllFriendsActivities/" + userId);

}

export const eventLogic = new EventLogic();