import { Component, ElementRef, HostListener, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import AOS from "aos";

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  @Input() projectData: any;
  @Input() index!: number;
  @Input() projectsLength!: number;
  @Input() isAlternate!: boolean;
  @Input() dataAos!: string;
  @ViewChild('projectIllustration') illustration!: ElementRef;
  @ViewChild('projectBorder') border!: ElementRef;

  constructor(private breakpointObserver: BreakpointObserver, private renderer: Renderer2, private element: ElementRef) {
    AOS.init();
    AOS.refresh();
  }

  ngOnInit() {
    this.updateDataAosAttribute();
  }

  getEnumeration() {
    return `0${this.index + 1}/0${this.projectsLength}`;
  }

  navigateToLink(link: string) {
    window.open(link, '_blank');
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.setBorder();
    this.updateDataAosAttribute();
  }

  setBorder() {
    if (this.illustration && this.border) {
      const illustrationHeight = this.illustration.nativeElement.offsetHeight;
      this.border.nativeElement.style.height = `${illustrationHeight}px`;
    }
  }

  updateDataAosAttribute() {
    this.breakpointObserver.observe(['(max-width: 800px)']).subscribe((result) => {
      if (result.matches && this.dataAos) {
        this.renderer.setAttribute(this.element.nativeElement, 'data-aos', this.dataAos);
      } else {
        this.renderer.removeAttribute(this.element.nativeElement, 'data-aos');
      }
    });
  }
}