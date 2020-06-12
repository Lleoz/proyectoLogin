import { Pipe, PipeTransform } from '@angular/core';
import { GenreType } from 'src/app/core/models/genre-type';

@Pipe({
  name: 'genre'
})
export class GenrePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    if (value === GenreType.MALE) {
      return 'Masculino';
    }

    if (value === GenreType.FEMALE) {
      return 'Femenino';
    }

    return 'n/c';
  }

}
