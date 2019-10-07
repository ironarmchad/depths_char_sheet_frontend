import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Ability} from '../../../_models/ability';

@Injectable({
  providedIn: 'root'
})
export class AbilityDataService {
  private abilitySource: BehaviorSubject<Ability> = new BehaviorSubject<Ability>(new Ability);
  abilityObs = this.abilitySource.asObservable();

  get ability() {
    return this.abilitySource.value;
  }

  setAbility(abil: Ability) {
    this.abilitySource.next(abil);
  }
}
