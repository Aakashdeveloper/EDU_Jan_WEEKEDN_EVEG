import { Injectable } from '@angular/core';
import { Employee} from '../models/employee.model';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()

export class FormPosterService {

    constructor(private _httpclient: HttpClient) {}

    postEmployee(employee: Employee): Observable<any> {
        console.log('gettinhgin service');
        return this._httpclient.post('http://localhost:3100/postemployee', employee);
    }
}
