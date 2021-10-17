import { apiBase } from "./api/api-base";

class EventLogic {

    getEvents = () => apiBase.getRequest("activities/GetAllFriendsActivities/1");

}

export const eventLogic = new EventLogic();