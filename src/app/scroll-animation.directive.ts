import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
    selector: '[appScrollAnimation]'
})
export class ScrollAnimationDirective {
    @Input() animationClass: string = '';

    constructor(private element: ElementRef) { }

    @HostListener('window:scroll', ['$event'])
    onWindowScroll(_event: Event): void {
        const boundingClientRect = this.element.nativeElement.getBoundingClientRect();
        if (boundingClientRect.top <= window.innerHeight && boundingClientRect.bottom >= 0) {
            this.updateAnimation(true);
        } else {
            this.updateAnimation(false);
        }
    }


    private updateAnimation(isVisible: boolean): void {
        const element = this.element.nativeElement;
        if (isVisible) {
            element.style.animation = `${this.animationClass} infinite`; // animation duration is set in the css
        } else {
            element.style.animation = 'none';
        }
    }
}