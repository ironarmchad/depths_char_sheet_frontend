import {Deserializable} from '../_interfaces/deserializable';

export class UserInfo implements Deserializable {
  mostRecentCharacter: number;

  deserialize(input: any): this {
    Object.assign(this, input);
    return this;
  }
}
