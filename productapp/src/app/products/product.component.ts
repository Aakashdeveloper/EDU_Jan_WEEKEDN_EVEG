import { Component, OnInit } from '@angular/core';
import { IProduct} from './product.model';
import { ProductService } from './product.service';

@Component({
    selector: 'app-prod',
    templateUrl: './product.component.html',
    // styles: ['thead{color:teal}', 'h4{color:tomato}']
    styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {
        constructor(private _productService: ProductService) {}
        title: String = '****Product Page****';

        info: String = 'No of item search on the basis of';
        showTable: Boolean = true;
        showImage: Boolean = false;
        userInput: String;
        imageWidth: Number = 100;
        products: IProduct[];

        toggleImage(): void {
            this.showImage = !this.showImage;
        }

        onDataRecive(message: String): void {
            this.title = '~~~~Product List~~~~~' + message;
        }

        ngOnInit(): void {
            this.products = this._productService.getProducts();
        }
}

