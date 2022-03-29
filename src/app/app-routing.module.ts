import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularConceptsComponent } from './AngularConcepts/AngularConcepts.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"angularConcepts",component:AngularConceptsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
