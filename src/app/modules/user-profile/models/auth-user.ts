export interface AuthUser {
  id?: number;
  username: string;
  email: string;
  password: string;
  // role: UserRole;
  token?: string;
}
