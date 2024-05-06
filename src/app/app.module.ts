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

@NgModule({
  declarations: [
    AppComponent,
    headerComponent,
    buttonTemplate,
    sideNaveComponent,
    homeComponent,
    scrollComponent,
    cardComponent,
    cardBigComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
