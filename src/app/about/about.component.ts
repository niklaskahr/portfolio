import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { ScrollService } from '../services/scroll.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  @ViewChild('portrait') portrait!: ElementRef;
  @ViewChild('border') border!: ElementRef;

  constructor(private scrollService: ScrollService, private elementRef: ElementRef) { }

  ngOnInit(): void {
    this.scrollService.scrollTo$.subscribe((targetElementId: string) => {
      if (targetElementId === 'about') {
        const targetPosition = this.elementRef.nativeElement.offsetTop - 110;
        window.scrollTo({ top: targetPosition, behavior: 'smooth' });
      }
    });
  }

  onScrollToContact() {
    this.scrollService.scrollTo('contact');
  }

  setBorder() {
    this.setTargetElementHeight();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.setTargetElementHeight();
  }

  setTargetElementHeight() {
    if (this.portrait && this.border) {
      const portraitHeight = this.portrait.nativeElement.offsetHeight;
      this.border.nativeElement.style.height = `${portraitHeight}px`;
    }
  }
}