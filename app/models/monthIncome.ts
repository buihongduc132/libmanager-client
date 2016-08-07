import { BaseObject } from './baseObject';
import { DateIncome } from './dateIncome';


export class MonthIncome extends BaseObject{
  month: number;
  year: number;
  dateIncomes: DateIncome[]; 
}
