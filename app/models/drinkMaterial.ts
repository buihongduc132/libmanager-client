import { BaseObject } from './baseObject';
import { Material } from './material.ts';

export class DrinkMaterial extends BaseObject{
  material: Material;
  amount: number;
}