import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LandingPage } from './landingPage.component';
import { LandButton } from './landButton/landButton.component';

@NgModule({
  declarations: [
    LandingPage,
    LandButton
  ],
  imports: [
    BrowserModule,
  ],
  bootstrap: [LandingPage]
})
export class LandingPageModule { }
