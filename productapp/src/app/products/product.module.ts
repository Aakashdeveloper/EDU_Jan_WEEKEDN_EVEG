import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

import { ProductComponent } from './product.component';
import { MyUpperPipe } from './myUpper.pipe';
import { DiscountedPipe } from './discount.pipe';
import { ProductSearchPipe } from './productSearch.pipe';
import { ProductDetailComponent } from './product-detail.component';
import { ProductService } from './product.service';
import { RouterGaurds } from './product.gaurds';


@NgModule({
    imports: [
        RouterModule.forChild([
            {path: 'products', component: ProductComponent},
            {path: 'products/:id', canActivate: [RouterGaurds],  component: ProductDetailComponent}
        ]),
        SharedModule
    ],
    declarations: [
        ProductComponent,
        MyUpperPipe,
        DiscountedPipe,
        ProductSearchPipe,
        ProductDetailComponent
    ],
    providers: [
        ProductService,
        RouterGaurds
    ]
})

export class ProductModule {

}
