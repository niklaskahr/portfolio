import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {
  projects = [
    {
      title: 'Pokédex',
      technologies: 'RestAPI | JavaScript | HTML | CSS',
      description: 'An interactive web app for exploring Pokémon using PokéAPI. It displays essential details and offers convenient features like unit conversions and seamless navigation.',
      image: './assets/img/projects/pokedex.jpg',
      link: 'https://niklas-kahr.developerakademie.net/pokedex/index.html'
    },
    {
      title: 'Join',
      technologies: 'JavaScript | HTML | CSS',
      description: 'A collaboration hub that makes teamwork a breeze! It\'s packed with all the essential tools you need to keep your team connected and projects on track. <em>Developed through group work.</em>',
      image: './assets/img/projects/join.svg',
      link: 'https://niklas-kahr.developerakademie.net/join/assets/templates/login.html'
    },
    {
      title: 'Sharkie',
      technologies: 'JavaScript | HTML | CSS',
      description: 'A simple Jump ’n’ Run Game based on an object-oriented approach. Help Sharkie to find coins and poison bottles to fight against enemies.',
      image: './assets/img/projects/sharkie.svg',
      link: 'https://niklas-kahr.developerakademie.net/sharkie/index.html'
    },
    {
      title: 'Simple CRM',
      technologies: 'Angular | Firebase',
      description: 'A Customer Relationship Management system featuring comprehensive CRUD operations to effectively manage and maintain client relationships.',
      image: './assets/img/projects/crm.svg',
      link: 'https://niklas-kahr.developerakademie.net'
    }
  ];
}
