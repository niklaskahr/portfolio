import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {
  projects = [
    {
      enumeration: '01/04',
      title: 'Pokédex',
      technologies: 'RestAPI | JavaScript | HTML | CSS',
      description: 'An interactive web app for exploring Pokémon using PokéAPI. It displays essential details and offers convenient features like unit conversions and seamless navigation.',
      image: './assets/img/projects/pokedex.jpg'
    },
    {
      enumeration: '02/04',
      title: 'Join',
      technologies: 'JavaScript | HTML | CSS',
      description: 'A collaboration hub that makes teamwork a breeze! It\'s packed with all the essential tools you need to keep your team connected and projects on track.',
      image: './assets/img/projects/join.svg'
    },
    {
      enumeration: '03/04',
      title: 'Sharkie',
      technologies: 'JavaScript | HTML | CSS',
      description: 'A simple Jump ’n’ Run Game based on an object-oriented approach. Help Sharkie to find coins and poison bottles to fight against enemies.',
      image: './assets/img/projects/sharkie.jpg'
    },
    {
      enumeration: '04/04',
      title: 'Simple CRM',
      technologies: 'Angular | Firebase',
      description: 'A Customer Relationship Management system featuring comprehensive CRUD operations to effectively manage and maintain client relationships.',
      image: './assets/img/projects/sharkie.jpg'
    }
  ];
}
