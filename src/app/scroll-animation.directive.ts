import { Directive, ElementRef, Input, HostListener, OnInit } from '@angular/core';

@Directive({
    selector: '[appScrollAnimation]'
})
export class ScrollAnimationDirective implements OnInit {
    @Input() animation: string = '';
    delay: number = 0;

    constructor(private element: ElementRef) { }

    ngOnInit(): void {
        console.log('test');
        this.updateAnimation(true);
    }

    //@HostListener('window:scroll', ['$event'])
    // onWindowScroll(_event: Event): void {
    //     const boundingClientRect = this.element.nativeElement.getBoundingClientRect();
    //     if (boundingClientRect.top <= window.innerHeight && boundingClientRect.bottom >= 0) {
    //     this.updateAnimation(true);
    //     } else {
    //     this.updateAnimation(false);
    //     }
    // }


    private updateAnimation(isVisible: boolean): void {
        const element = this.element.nativeElement;
        let duration = this.returnDuration(this.animation);
        const timingFunction = this.returnTimingFunction(this.animation);
        if (isVisible) {
            console.log(`${this.animation} ${duration}s ${timingFunction} ${this.delay}s infinite`);
            element.style.animation = `${this.animation} ${duration}s ${timingFunction} ${this.delay}s infinite`;
            this.increaseDelay();
        } else {
            element.style.animation = 'none';
        }
    }


    private returnDuration(animation: string) {
        switch (animation) {
            case 'move-upwards':
                return 10;
            default:
                return 3;
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

    private increaseDelay() {
        this.delay += 0.25;
        if (this.delay > 2.25) { // 0.25 increments, 0-2.25s delay
            this.delay = 0;
        }
    }
}
