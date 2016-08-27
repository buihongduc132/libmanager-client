import { BaseObject } from './baseObject';
import { Drink } from './drink.ts';
import { Person } from './person.ts';

export class IncomeDetail extends BaseObject{
    discount: number;
    price: number;
    Dish: Drink;
    keeper: Person;
    isDeleted: boolean;
    note: string;
}