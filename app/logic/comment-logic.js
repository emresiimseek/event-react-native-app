import { apiBase } from "./api/api-base";

class CommentLogic {
  saveComment = (value) => apiBase.postRequest("comments", value);

  getComments = (eventId) =>
    apiBase.getRequest("comments/getByActivity/" + eventId);
}

export const commentLogic = new CommentLogic();
