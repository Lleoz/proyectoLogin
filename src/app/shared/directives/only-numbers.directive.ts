import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appOnlyNumbers]'
})
export class OnlyNumbersDirective {

  private regex = new RegExp(/^[0-9]+$/);
  private specialKeys: Array<string> = ['Backspace', 'ArrowLeft', 'ArrowRight'];

  constructor(
    private element: ElementRef
  ) { }

  @HostListener('keydown', ['$event']) handleKeyDown(event: KeyboardEvent) {
    if (this.specialKeys.indexOf(event.key) !== -1) {
      return;
    }
    console.log(event.key);
    const inputValue: string = this.element.nativeElement.value.concat(event.key);
    if (inputValue && !String(inputValue).match(this.regex)) {
      event.preventDefault();
    }

    return;
  }


}
