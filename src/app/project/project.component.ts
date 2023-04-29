import { Component, ElementRef, HostListener, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent {
  @Input() projectData: any;
  @Input() index!: number;
  @Input() projectsLength!: number;
  @Input() isAlternate!: boolean;
  @ViewChild('projectIllustration') illustration!: ElementRef;
  @ViewChild('projectBorder') border!: ElementRef;

  getEnumeration() {
    return `0${this.index + 1}/0${this.projectsLength}`;
  }

  navigateToLink(link: string) {
    window.open(link, '_blank');
  }

  setBorder() {
    this.setTargetElementHeight();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.setTargetElementHeight();
  }

  setTargetElementHeight() {
    if (this.illustration && this.border) {
      const illustrationHeight = this.illustration.nativeElement.offsetHeight;
      this.border.nativeElement.style.height = `${illustrationHeight}px`;
    }
  }
}