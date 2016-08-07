import { BaseObject } from './baseObject';
import { Material } from './material.ts';

export class Drink extends BaseObject{
  name: string;
  price: number;
  parent: Drink;
  materials: Material[];
}
