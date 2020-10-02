import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './pages/about/about.component';
import { ReadmeComponent } from './pages/readme/readme.component';
import { HomeComponent } from './pages/home/home.component';
import { ModNavMenuComponent } from './mod/mod-nav-menu/mod-nav-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ReadmeComponent,
    HomeComponent,
    ModNavMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    Title
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
