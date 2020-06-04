import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'genero'
})
export class GeneroPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    if (value === 1) {
      return 'Hombre';
    }

    if (value === 2) {
      return 'Mujer';
    }

    return 'n/c';
  }

}
