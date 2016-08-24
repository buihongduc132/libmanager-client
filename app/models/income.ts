import { BaseObject } from './baseObject';

import { Person } from './person.ts';
import { IncomeDetail } from './incomeDetail.ts';

export class Income extends BaseObject{
    dayGen: number;
    dayActual: number;
    monthGen: number;
    monthActual: number;
    yearGen: number;
    yearActual: number;
    payor: Person;
    incomeDetails: IncomeDetail[];
    time: Date;
    total: number;
    isDeleted: boolean;
}