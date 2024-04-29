import { IBase } from './base.model';
import { ILoginUser } from './login-user.model';

export interface IUser extends ILoginUser, IBase {
  name: string;
}
