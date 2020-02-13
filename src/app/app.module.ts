import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {NgbAlertModule, NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {JwtInterceptor} from './_helpers/jwt.interceptor';
import {ErrorInterceptor} from './_helpers/error.interceptor';
import {NavbarModule} from './navbar/navbar.module';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {UserComponent} from './user/user.component';
import {OutOfDomainComponent} from './out-of-domain/out-of-domain.component';
import {TypographyComponent} from './typography/typography.component';
// import { GuidesModule } from './guides/guides.module';
import {CharacterService} from './_services/character.service';
import { UnderstandingDiceComponent } from './understanding-dice/understanding-dice.component';
import { DifficultyDiceComponent } from './understanding-dice/difficulty-dice/difficulty-dice.component';
import { GameComponent } from './game/game.component';
import { OpposedDiceComponent } from './understanding-dice/opposed-dice/opposed-dice.component';
import { AdvDcDiceComponent } from './understanding-dice/adv-dc-dice/adv-dc-dice.component';
import { AdvOffDiceComponent } from './understanding-dice/adv-off-dice/adv-off-dice.component';
import { AdvDefDiceComponent } from './understanding-dice/adv-def-dice/adv-def-dice.component';
import { AdvBothDiceComponent } from './understanding-dice/adv-both-dice/adv-both-dice.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    UserComponent,
    OutOfDomainComponent,
    TypographyComponent,
    UnderstandingDiceComponent,
    DifficultyDiceComponent,
    GameComponent,
    OpposedDiceComponent,
    AdvDcDiceComponent,
    AdvOffDiceComponent,
    AdvDefDiceComponent,
    AdvBothDiceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbAlertModule,
    NgbDropdownModule,
    NavbarModule,
    // GuidesModule
  ],
  providers: [
    CharacterService,
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
