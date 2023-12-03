import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfolioComponent } from './Components/profolio/profolio.component';

const routes: Routes = [

  {
    path: 'porfolio',
    component: ProfolioComponent
  },
  {
    path: '',
    redirectTo: 'porfolio',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
