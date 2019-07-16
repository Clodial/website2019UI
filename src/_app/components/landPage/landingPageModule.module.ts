import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LandingPage } from './landingPage.component';
import { LandButton } from './landButton/landButton.component';
import { CommonCoreModule } from './../_common/commonCore.module';

@NgModule({
  declarations: [
    LandingPage,
    LandButton
  ],
  imports: [
    BrowserModule,
    CommonCoreModule
  ],
  bootstrap: [LandingPage]
})
export class LandingPageModule { }
