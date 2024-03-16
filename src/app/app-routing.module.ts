import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ArchitectureComponent } from './architecture/architecture.component';
import { ContactComponent } from './contact/contact.component';
import { WorksComponent } from './works/works.component';

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "aboutus", component: AboutusComponent },
  { path: "architecture", component: ArchitectureComponent },
  { path:"contact", component:ContactComponent},
  {path:"works", component:WorksComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const RoutingComponent = [HomeComponent, AboutusComponent, ArchitectureComponent,ContactComponent,WorksComponent];
