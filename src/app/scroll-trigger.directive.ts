import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
    selector: '[ng-scroll-trigger]'
})
export class ScrollTriggerDirective {
    @Input('ng-scroll-trigger') scrollPoint!: number;

    constructor (private element: ElementRef) {}

    @HostListener('window:scroll', [])
    onWindowScroll() {
        const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        if (scrollPosition >= this.scrollPoint) {
            //this.element.nativeElement.classList.add('active');
        }
    }
}