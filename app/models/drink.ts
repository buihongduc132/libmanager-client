import { BaseObject } from './baseObject';
import { DrinkMaterial } from './drinkMaterial.ts';

export class Drink extends BaseObject{
  name: string;
  price: number;
  parent: Drink;
  dishMaterials: DrinkMaterial[];
}
