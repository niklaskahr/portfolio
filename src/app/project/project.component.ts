import { Component, Input } from '@angular/core';

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

  getEnumeration() {
    return `0${this.index + 1}/0${this.projectsLength}`;
  }

  navigateToLink(link: string) {
    window.open(link, '_blank');
  }
}
