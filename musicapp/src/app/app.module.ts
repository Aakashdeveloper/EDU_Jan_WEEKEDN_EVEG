import { NgModule} from '@angular/core';
import { AppComponent } from './app.component';
import {BrowserModule} from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { MusicComponent } from './music/music.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { MusicService } from './music/music.service';
import { SafePipe } from './safe.pipe';
import {Globals} from './music/global';

@NgModule({
    imports:
    [
        BrowserModule,
        CommonModule,
        HttpModule,
        HttpClientModule
        ],
    declarations:[
        AppComponent,
        MusicComponent,
        SafePipe
    ],
    providers:[
        MusicService,
        Globals
    ],
    bootstrap:
    [
        AppComponent
    ]

})

export class AppModule{

}