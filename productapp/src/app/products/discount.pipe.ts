import { Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'discounted'
})

export class DiscountedPipe implements PipeTransform {
    transform(value: number, amount: number) {
        value = value - amount;
        return value;
    }
}
