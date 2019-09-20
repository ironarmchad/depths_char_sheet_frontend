import {Deserializable} from '../_interfaces/deserializable';

export class User implements Deserializable {
  username: string;
  password: string;
  accessToken?: string;
  refreshToken?: string;

  deserialize(input: any): this {
    Object.assign(this, input);
    return this;
  }
}
