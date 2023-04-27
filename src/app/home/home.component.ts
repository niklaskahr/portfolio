import { Component, ElementRef } from '@angular/core';
import { ScrollService } from '../services/scroll.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private scrollService: ScrollService, private elementRef: ElementRef) {}

  ngOnInit(): void {
    this.scrollService.scrollTo$.subscribe((targetElementId: string) => {
      if (targetElementId === 'home') {
        const targetPosition = 0;
        window.scrollTo({ top: targetPosition, behavior: 'smooth' });
      }
    });
  }

  onScrollToSkilltree() {
    this.scrollService.scrollTo('skilltree');
  }
}