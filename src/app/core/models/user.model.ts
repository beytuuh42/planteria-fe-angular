import { IBase } from './base.model';
import { ILoginToken } from './login-token.model';

export interface IUser extends ILoginToken, IBase {
  name: string;
}
