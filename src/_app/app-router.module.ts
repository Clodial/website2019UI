import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPage } from './components/landPage/landingPage.component';

const routes : Routes = [
    { path: '', pathMatch: 'full', component: LandingPage}
]

@NgModule({
    imports: [ RouterModule.forRoot(routes)],
    exports: [ RouterModule ]
})
export class AppRouterModule{}