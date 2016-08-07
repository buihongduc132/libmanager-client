import { BaseObject } from './baseObject';
import { DateIncomeDetail } from './dateIncomeDetail';

export class DateIncome extends BaseObject {
  day: number;
  dateIncomeDetails: DateIncomeDetail[];  
}