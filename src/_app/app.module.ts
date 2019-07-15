import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRouterModule } from './app-router.module';
import { AppComponent } from './app.component';
import { LandingPageModule } from './components/landPage/landingPageModule.module';

@NgModule({
  imports: [
    BrowserModule,
    AppRouterModule,
    LandingPageModule
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
