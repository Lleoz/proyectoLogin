import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenrePipe } from './genre.pipe';

@NgModule({
  declarations: [
      GenrePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GenrePipe
  ]
})
export class PipesModule { }
