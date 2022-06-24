import { getAuthUrl } from "../configs/api.config";
import { IUser } from "../shared/user.types";
import instance from "api/interceptors";

export const AuthService = {
  async sendUser(user: IUser): Promise<IUser> {
    const response = await instance.post<IUser>(getAuthUrl("create"), user);

    return response.data;
  },
};
