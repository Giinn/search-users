import { httpClient } from "../../httpClient";
import { User, UserPost } from "../ui/types";

class UsersHttpClient {
  getUsers(page = 1): Promise<User[]> {
    return httpClient.get<User[]>(`/users?page=${page}&per_page=10`);
  }

  getUserPosts(userId: number): Promise<UserPost[]> {
    return httpClient.get<UserPost[]>(`/users/${userId}/posts`);
  }
}

export const usersHttpClient = new UsersHttpClient();
