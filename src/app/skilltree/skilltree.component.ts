import { Component, ElementRef, OnInit } from '@angular/core';
import { ScrollService } from '../services/scroll.service';

@Component({
  selector: 'app-skilltree',
  templateUrl: './skilltree.component.html',
  styleUrls: ['./skilltree.component.scss']
})
export class SkilltreeComponent implements OnInit {
  constructor(private scrollService: ScrollService, private elementRef: ElementRef) {}

  ngOnInit(): void {
    this.scrollService.scrollTo$.subscribe((targetElementId: string) => {
      if (targetElementId === 'skilltree') {
        const targetPosition = this.elementRef.nativeElement.offsetTop - 90;
        window.scrollTo({ top: targetPosition, behavior: 'smooth' });
      }
    });
  }
}
