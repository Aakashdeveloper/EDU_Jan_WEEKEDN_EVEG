import { Injectable } from '@angular/core';
import { Http ,Response} from '@angular/http';
import { Imusic , Ialbums ,Iartists } from './music.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()

export class MusicService { 

    private _musicUrl='https://ngmusicdb.herokuapp.com/api/getMusic';

    constructor( private _http: Http) {}

    private extractData(res:Response){
        console.log("hello"+res)
        return res.json();
    }

        getMusic():Observable<Imusic[]>{
            console.log("hi" +this.extractData);
        return this._http.get(this._musicUrl)
                   .pipe(map(this.extractData));
    }


}