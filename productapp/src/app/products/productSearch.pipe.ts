import { Pipe, PipeTransform} from '@angular/core';
import { IProduct } from './product.model';

@Pipe({
    name: 'productSearch'
})


export class ProductSearchPipe implements PipeTransform {
    transform(value: IProduct[], userDate: string) {
        userDate = userDate ? userDate.toLowerCase() : null;
        return userDate ? value.filter((product: IProduct) =>
            (product.productName.toLowerCase().indexOf(userDate) !== -1)) : value;
    }
}
