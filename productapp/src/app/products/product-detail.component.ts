import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { ProductService } from './product.service';
import { IProduct} from './product.model';

@Component({
    templateUrl: './product-detail.component.html'
})

export class ProductDetailComponent implements OnInit {

    id: Number;
    details: IProduct[];

    constructor(private _route: ActivatedRoute,
                private _prodService: ProductService,
                private _router: Router) {}

    ngOnInit(): void {
        this.id = this._route.snapshot.params['id'];
        this._prodService.getProductDetail(this.id)
            .subscribe((item) => this.details = item);
    }

    onBack(): void {
        this._router.navigate(['/products']);
    }
}



/*
name: String;
    desc: String;
    image: String;
 this._route
            .queryParams
            .subscribe((data) => {
                this.name = data['name'];
                this.desc = data['description'];
                this.image = data['img'];
            });
*/
