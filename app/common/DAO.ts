import { Response } 
from '@angular/http';

export class DAO {
   public static extractData(res: Response) {
    let body = res.json();
    return body || { };
  }
}