import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'genre'
})
export class GenrePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    if (value === '1') {
      return 'Masculino';
    }

    if (value === '2') {
      return 'Femenino';
    }

    return 'n/c';
  }

}
