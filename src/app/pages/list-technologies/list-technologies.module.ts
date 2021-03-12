import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListTechnologiesRoutingModule } from './list-technologies-routing.module';
import { ListTechnologiesComponent } from './list-technologies.component';
import { HeaderModule } from '../../partials/header/header.module';
import { ListTechnologiesService } from '../../services/list-technologies/list-technologies.service';


@NgModule({
  declarations: [ListTechnologiesComponent],
  imports: [
    CommonModule,
    ListTechnologiesRoutingModule,
    HeaderModule
  ],
  providers: [
    ListTechnologiesService
  ]
})
export class ListTechnologiesModule { }
