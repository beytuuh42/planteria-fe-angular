import { IBase } from './base.model';
import { ILoginUser } from './loginuser';

export interface IUser extends ILoginUser, IBase {
  name: string;
}
