import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { LoginMiniComponent } from './login-mini/login-mini.component';
import {NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [NavbarComponent, LoginMiniComponent],
  exports: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    NgbDropdownModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class NavbarModule {
}
