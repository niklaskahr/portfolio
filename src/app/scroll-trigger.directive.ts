import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { ScrollAnimationDirective } from './scroll-animation.directive';

@Directive({
  selector: '[ng-scroll-trigger]'
})
export class ScrollTriggerDirective {
  @Input('ng-scroll-trigger') scrollPoint!: number;

  constructor(private element: ElementRef, private scrollAnimation: ScrollAnimationDirective) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (scrollPosition >= this.scrollPoint) {
      this.scrollAnimation.updateAnimation(true);
    } else {
      this.scrollAnimation.updateAnimation(false);
    }
  }
}
