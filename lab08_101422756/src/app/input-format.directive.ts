import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {
  private textInput: String;

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.textInput = el.nativeElement.value;
   }

   @HostListener('focus') onFocus() {
      this.textInput = this.el.nativeElement.value;
      this.renderer.setProperty(this.el.nativeElement, 'value', this.textInput.toUpperCase());
   }

   @HostListener('blur') onBlur() {
    this.renderer.setProperty(this.el.nativeElement, 'value', this.textInput);
  }
}
