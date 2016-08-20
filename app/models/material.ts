import { BaseObject } from './baseObject';
import { Drink } from './drink.ts';

export class Material extends BaseObject{
  name: string;
  price: number;
  containerAmount: number;
  unit: string;
  dishes: Drink[];
}
