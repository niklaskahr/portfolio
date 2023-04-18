import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appScrollAnimation]'
})
export class ScrollAnimationDirective {
  static delay: number = 0; // shared between all instances of this directive

  constructor(private element: ElementRef) {}

  public updateAnimation(isVisible: boolean): void {
    const element = this.element.nativeElement;
    if (isVisible) {
      if (!element.classList.contains('move-upwards')) {
        element.style.animationDelay = `${ScrollAnimationDirective.delay}s`;
        console.log(`${ScrollAnimationDirective.delay}s !important`);
        element.classList.add('move-upwards');
        this.increaseDelay();
      }
    } else {
      element.classList.remove('move-upwards');
      this.resetDelay();
    }
  }

  private increaseDelay() {
    ScrollAnimationDirective.delay += 0.25;
  }

  private resetDelay() {
    ScrollAnimationDirective.delay = 0;
  }
  
}
