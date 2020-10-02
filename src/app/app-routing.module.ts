import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AboutComponent} from "./pages/about/about.component";
import {ReadmeComponent} from "./pages/readme/readme.component";
import {HomeComponent} from "./pages/home/home.component";

const routes: Routes = [
  { path: '', component: HomeComponent, data: {title: 'Home'}},
  { path: 'about-component', component: AboutComponent, data: {title: 'About'}},
  { path: 'readme-component', component: ReadmeComponent, data: {title: 'Readme'}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
