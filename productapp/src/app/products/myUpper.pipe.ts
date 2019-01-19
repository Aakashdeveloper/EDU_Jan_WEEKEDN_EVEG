import { Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'myUpper'
})

export class MyUpperPipe implements PipeTransform {
    debbuger;
    transform(value: string, typereq: string, extra: string) {
        if (typereq === 'upper') {
            value = value.toUpperCase();
            // value = `${value}  ${extra}`;
        } else {
            value = value.toLowerCase();
        }
        return value;
    }
}
