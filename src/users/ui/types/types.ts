export interface User {
  id: number;
  name: string;
  email: string;
  gender: string;
  status: string;
}

export interface UserPost {
  id: number;
  user_id: number;
  title: string;
  body: string;
}
