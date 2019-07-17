import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRouterModule } from './app-router.module';
import { AppComponent } from './app.component';
import { LandingPageModule } from './components/landPage/landingPageModule.module';
import { CommonCoreModule } from './components/_common/commonCore.module';

@NgModule({
  imports: [
    BrowserModule,
    AppRouterModule,
    LandingPageModule,
    CommonCoreModule
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
