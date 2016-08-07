import { BaseObject } from './baseObject';
import { Drink } from './Drink.ts';
import { DateIncome } from './dateIncome';

export class DateIncomeDetail extends BaseObject{
  day: number;
  dish: Drink;
  amount: number;
  discount: number;
  dateIncome: DateIncome;
}
