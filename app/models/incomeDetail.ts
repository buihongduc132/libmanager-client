import { BaseObject } from './baseObject';
import { Drink } from './drink.ts';

export class IncomeDetail extends BaseObject{
    discount: number;
    price: number;
    dishes: Drink[];
}
