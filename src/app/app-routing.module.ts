import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ScoringComponent } from './scoring/scoring.component';
import { StandingComponent } from './standing/standing.component';

const routes: Routes = [
  {path:'admin',component:AdminComponent},
  {path:'scoring',component:ScoringComponent},
  {path:'standing',component:StandingComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
