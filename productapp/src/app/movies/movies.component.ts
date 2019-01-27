import { Component, OnInit } from '@angular/core';
import { MoviesService } from './movies.service';

@Component({
    templateUrl : './movies.component.html'
})

export class MoviesComponent implements OnInit {

    movies: any[];

    constructor(private _movies: MoviesService) {

    }

    ngOnInit(): void {
        this._movies.getMovies()
            .subscribe((data) => this.movies = data);
    }

}
