import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { RegisterComponent } from './register.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { RegisterService } from '../../services/register/register.service';
import { HeaderModule } from 'src/app/partials/header/header.module';

@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    HeaderModule
  ],
  providers: [
    RegisterService
  ]
})
export class RegisterModule { }
