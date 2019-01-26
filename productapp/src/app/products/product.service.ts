import { Injectable } from '@angular/core';
import { IProduct } from './product.model';
import { HttpClient } from '@angular/common/http';
// import { Http} from '@angular/http';
import { Observable } from 'rxjs';


@Injectable()

export class ProductService {

    private _productUrl = 'https://ngproductsparam.herokuapp.com/api/getProductDetails';

    constructor(private _http: HttpClient) {}

    getProducts(): Observable<IProduct[]> {
        return this._http.get<IProduct[]>(this._productUrl);
    }

    getProductDetail(id): Observable<IProduct[]> {
        return this._http.get<IProduct[]>(`${this._productUrl}?productId=${id}`);
    }

}
/*
getProducts(): Observable<IProduct[]> {
        return this._http.get<IProduct[]>(this._productUrl);
    }

    getProducts(): Promise<IProduct[]> {
        return this._http.get(this._productUrl)
            .toPromise()
            .then((res) => res.json());
    }
}
when we create the object or try to use extranal object rather than creating itself
*/
