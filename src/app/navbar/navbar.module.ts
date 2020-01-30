import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { LoginMiniComponent } from './login-mini/login-mini.component';
import {NgbCollapseModule, NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import { CharacterButtonComponent } from './character-button/character-button.component';



@NgModule({
  declarations: [NavbarComponent, LoginMiniComponent, CharacterButtonComponent],
  exports: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    NgbDropdownModule,
    NgbCollapseModule
  ]
})
export class NavbarModule {
}
