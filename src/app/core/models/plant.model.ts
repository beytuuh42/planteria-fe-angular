import { IBase } from './base.model';

export interface IPlant extends IBase {
  name: string;
  photo: File;
  description: string;
}
