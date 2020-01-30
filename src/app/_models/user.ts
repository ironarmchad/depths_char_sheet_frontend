import {Deserializable} from '../_interfaces/deserializable';
import {UserInfo} from './user-info';

export class User implements Deserializable {
  username: string;
  password: string;
  info: UserInfo;
  accessToken?: string;
  refreshToken?: string;

  deserialize(input: any): this {
    this.username = input.username;
    this.password = input.password;
    this.info = new UserInfo().deserialize(input.info);
    this.accessToken = input.accessToken;
    this.refreshToken = input.refreshToken;
    return this;
  }
}
