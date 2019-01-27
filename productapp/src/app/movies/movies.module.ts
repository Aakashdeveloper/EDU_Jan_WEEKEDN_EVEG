import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

import { MoviesService } from './movies.service';
import { MoviesComponent } from './movies.component';
import { MoviesSideComponent } from './moviesSideView.component';




@NgModule({
    imports: [
        RouterModule.forChild([
            {path: 'movies', component: MoviesComponent},
            {path: 'side', component: MoviesSideComponent},
        ]),
        SharedModule
    ],
    declarations: [
        MoviesComponent,
        MoviesSideComponent
    ],
    providers: [
        MoviesService
    ]
})

export class MoviesModule {

}
