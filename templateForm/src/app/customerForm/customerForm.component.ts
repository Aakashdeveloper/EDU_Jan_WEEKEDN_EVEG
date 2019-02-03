import { Component } from '@angular/core';
import { Employee } from '../models/employee.model';
import {NgForm } from '@angular/forms';
import {FormPosterService} from '../services/formposter.service';

@Component({
    selector: 'app-form',
    templateUrl: './customerForm.component.html'
})

export class CustomerComponent {
    languages: any[] = ['AngularJs', 'NodeJs', 'ReactJs'];
    model = new Employee('John', 'andy', 'a@q.com', '123456', true, 'male', 'AngularJs');

    hasCodeAangerror: Boolean = false;

    constructor(private _formPoster: FormPosterService) {}

    validateCodelang(): void {
        if (this.model.codelang === 'default') {
            this.hasCodeAangerror = true;
        } else {
            this.hasCodeAangerror = false;
        }
    }

    formSubmit(form: NgForm): void {

        this._formPoster.postEmployee(form.value)
            .subscribe((res) => console.log('post success'));
    }

}



/*
ng pristine ng-untouced   ng-valid
ng-dirty    ng-touched      ng-invalid
*/
