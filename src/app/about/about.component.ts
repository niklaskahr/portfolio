import { Component, ElementRef, OnInit } from '@angular/core';
import { ScrollService } from '../services/scroll.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  constructor(private scrollService: ScrollService, private elementRef: ElementRef) { }

  ngOnInit(): void {
    this.scrollService.scrollTo$.subscribe((targetElementId: string) => {
      if (targetElementId === 'about') {
        const targetPosition = this.elementRef.nativeElement.offsetTop - 100;
        window.scrollTo({ top: targetPosition, behavior: 'smooth' });
      }
    });
  }

  onScrollToContact() {
    this.scrollService.scrollTo('contact');
  }
}