import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
    selector: '[appScrollAnimation]'
})
export class ScrollAnimationDirective {
    @Input() animation: string = '';

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
        let duration = this.returnDuration(this.animation);
        const timingFunction = this.returnTimingFunction(this.animation);
        if (isVisible) {
            console.log(`${this.animation} ${duration} ${timingFunction} infinite`);
            element.style.animation = `${this.animation} ${duration} ${timingFunction} infinite`;
        } else {
            element.style.animation = 'none';
        }
    }


    private returnDuration(animation: string) {
        switch (animation) {
            case 'move-upwards':
                return '10s';
            default:
                return '3s';
        }
    }


    private returnTimingFunction(animation: string) {
        switch (animation) {
            case 'move-upwards':
                return 'cubic-bezier(0.4, 0, 0.2, 1)';
            default:
                return 'ease-in-out';
        }
    }
}