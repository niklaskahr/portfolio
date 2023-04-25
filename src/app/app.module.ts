import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScrollAnimationDirective } from './directives/scroll-animation.directive';
import { ScrollTriggerDirective } from './directives/scroll-trigger.directive';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SkilltreeComponent } from './skilltree/skilltree.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ProjectComponent } from './project/project.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ScrollAnimationDirective,
    ScrollTriggerDirective,
    HeaderComponent,
    HomeComponent,
    SkilltreeComponent,
    PortfolioComponent,
    ProjectComponent,
    ContactComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { ScrollAnimationDirective: any }