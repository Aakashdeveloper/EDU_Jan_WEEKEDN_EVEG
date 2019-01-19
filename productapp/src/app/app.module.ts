import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

// Component
import { AppComponent } from './app.component';
import { DetailComponent } from './detail.component';
import { ProductComponent } from './products/product.component';
import { MyUpperPipe } from './products/myUpper.pipe';
import { DiscountedPipe } from './products/discount.pipe';

@NgModule({

    // We declare all Component & Pipe
    declarations: [
        AppComponent,
        DetailComponent,
        ProductComponent,
        MyUpperPipe,
        DiscountedPipe
    ],

    // All Module
    imports: [
        BrowserModule,
        FormsModule
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
