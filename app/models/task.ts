import { BaseObject } from './baseObject';
import { Person } from './person';

export class Task extends BaseObject {
  name: string;
  deadline: string;
  assignee: Person;
  note: string;
  priority: number;
}
