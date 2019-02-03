import { NgModule } from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { FilterPipe } from './filter.pipe';

@NgModule({
    declarations: [
        AppComponent,
        EmployeeComponent,
        FilterPipe
    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule
    ],
    bootstrap: [
        AppComponent
    ],
    providers: []
})

export class AppModule {

}
