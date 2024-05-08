import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { headerComponent } from './header/header.component';
import { buttonTemplate } from './button/button.component';
import { sideNaveComponent } from './side-nav/sideNave.component';
import { homeComponent } from './home/home.component';
import { scrollComponent } from './scroll/scroll.component';
import { cardComponent } from './cards/card.component';
import { cardBigComponent } from './cardsBig/cardBig.component';
import { cardMiniComponent } from './cardsMini/cardMini.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthModule } from './auth/auth.module';

@NgModule({
  declarations: [
    AppComponent,
    headerComponent,
    buttonTemplate,
    sideNaveComponent,
    homeComponent,
    scrollComponent,
    cardComponent,
    cardBigComponent,
    cardMiniComponent,
    NotFoundComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
 