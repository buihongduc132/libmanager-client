import { BaseObject } from './baseObject';
import { PersonType } from './personType';

export class Person extends BaseObject {
  name: string;
  type: PersonType;
}