import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AngularConceptsComponent } from './AngularConcepts/AngularConcepts.component';
import { NavBarComponent } from './Common/nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
      HomeComponent,
      AngularConceptsComponent,
      NavBarComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
