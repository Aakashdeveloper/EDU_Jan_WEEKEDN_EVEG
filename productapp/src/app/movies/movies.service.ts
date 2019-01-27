import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()

export class MoviesService {

    private _movieUrl = 'https://ngmovies.herokuapp.com/api/getMovies';

    constructor(private _http: HttpClient) {}

    getMovies(): Observable<any[]> {
        return this._http.get<any[]>(this._movieUrl);
    }

}
