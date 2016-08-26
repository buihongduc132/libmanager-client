import { BaseObject } from './baseObject';


import { IncomeDetail } from './incomeDetail.ts';

export class Income extends BaseObject{
    dayGen: number;
    dayActual: number;
    monthGen: number;
    monthActual: number;
    yearGen: number;
    yearActual: number;
    IncomeDetails: IncomeDetail[];
    time: Date;
    total: number;
    isDeleted: boolean;
}