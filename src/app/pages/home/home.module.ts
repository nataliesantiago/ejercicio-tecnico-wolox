import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { WelcomeSectionComponent } from './welcome-section/welcome-section.component';
import { WoloxerSectionComponent } from './woloxer-section/woloxer-section.component';
import { BenefitSectionComponent } from './benefit-section/benefit-section.component';
import { ThanksSectionComponent } from './thanks-section/thanks-section.component';
import { HomeComponent } from './home.component';
import { HeaderModule } from '../../partials/header/header.module';


@NgModule({
  declarations: [WelcomeSectionComponent, WoloxerSectionComponent, BenefitSectionComponent, ThanksSectionComponent, HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HeaderModule
  ]
})
export class HomeModule { }
