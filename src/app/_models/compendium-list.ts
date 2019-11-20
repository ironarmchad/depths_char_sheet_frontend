import {Deserializable} from '../_interfaces/deserializable';

export class CompendiumList implements Deserializable {
  list: CompendiumListItem[];

  deserialize(input: any): this {
    Object.assign(this, input);
    return this;
  }
}

class CompendiumListItem {
  id: number;
  title: string;
}
