import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { CustomerComponent } from './customerForm/customerForm.component';
import { FormPosterService } from './services/formposter.service';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule
    ],
    declarations: [
        AppComponent,
        CustomerComponent
    ],
    providers: [
        FormPosterService
    ],
    bootstrap: [
        AppComponent
    ]
})

export class AppModule {}
