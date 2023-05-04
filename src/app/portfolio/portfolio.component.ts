import { Component, ElementRef, OnInit } from '@angular/core';
import { ScrollService } from '../services/scroll.service';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  projects = [
    {
      title: 'Pokédex',
      technologies: 'RestAPI | JavaScript | HTML | CSS',
      description: 'An interactive web app for exploring Pokémon using PokéAPI. It displays essential details and offers convenient features like unit conversions and seamless navigation.',
      image: './assets/img/projects/pokedex.jpg',
      link: 'https://niklas-kahr.developerakademie.net/pokedex/index.html',
      github: 'https://github.com/NiklasKahr/pokedex'
    },
    {
      title: 'Join',
      technologies: 'JavaScript | HTML | CSS',
      description: 'A collaboration hub that makes teamwork a breeze! It\'s packed with all the essential tools you need to keep your team connected and projects on track. <em>Created through group effort.</em>',
      image: './assets/img/projects/join.svg',
      link: 'https://niklas-kahr.developerakademie.net/join/assets/templates/login.html',
      github: 'https://github.com/NiklasKahr/join'
    },
    {
      title: 'Sharkie',
      technologies: 'JavaScript | HTML | CSS',
      description: 'A simple Jump-and-Run game based on an object-oriented approach. Help Sharkie to find coins and poison bottles to fight against enemies.',
      image: './assets/img/projects/sharkie.svg',
      link: 'https://niklas-kahr.developerakademie.net/sharkie/index.html',
      github: 'https://github.com/NiklasKahr/sharkie'
    },
    {
      title: 'Simple CRM',
      technologies: 'Angular | Firebase',
      description: '<b class="red">(note for mentors: will be developed in next module)</b><br>A Customer Relationship Management system featuring comprehensive CRUD operations to effectively manage and maintain client relationships.',
      image: './assets/img/projects/crm.svg',
      link: 'https://niklas-kahr.developerakademie.net',
      github: 'https://github.com/NiklasKahr/simple-crm'
    }
  ];
  isShowingProjectComponents: boolean = true;
  isMobile: boolean = false;

  constructor(private scrollService: ScrollService, private elementRef: ElementRef, private breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
    this.scrollService.scrollTo$.subscribe((targetElementId: string) => {
      if (targetElementId === 'portfolio') {
        const targetPosition = this.elementRef.nativeElement.offsetTop - 100;
        window.scrollTo({ top: targetPosition, behavior: 'smooth' });
      }
    });
    // workaround for the AOS library not working properly on mobile devices
    this.breakpointObserver.observe(['(max-width: 800px)']).subscribe((result) => {
      const isMobileNow = result.matches;
      if (this.isMobile !== isMobileNow) {
        this.isMobile = isMobileNow;
        this.isShowingProjectComponents = false;
        setTimeout(() => {
          this.isShowingProjectComponents = true;
        }, 0);
      }
    });
  }
}
