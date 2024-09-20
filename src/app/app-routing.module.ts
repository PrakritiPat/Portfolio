import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import { ExperienceComponent } from './experience/experience.component';
import { ProjectComponent } from './project/project.component';

const routes: Routes = [
  {path: '', component: HomeComponent}, 
  {path: 'experience', component: ExperienceComponent},
  {path: 'project', component: ProjectComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
