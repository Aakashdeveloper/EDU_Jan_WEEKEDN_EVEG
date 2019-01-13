import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Component
import { AppComponent } from './app.component';
import { DetailComponent } from './detail.component';
import { ProductComponent } from './products/product.component';

@NgModule({

    // We declare all Component & Pipe
    declarations: [
        AppComponent,
        DetailComponent,
        ProductComponent
    ],

    // All Module
    imports: [
        BrowserModule
    ],

    // Only First Component
    bootstrap: [
        AppComponent
    ],

    // All Services
    providers: []

})

export class AppModule {

}
