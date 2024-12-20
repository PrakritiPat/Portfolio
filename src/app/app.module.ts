import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExperienceComponent } from './experience/experience.component';
import { HomeComponent } from './home/home.component';
import { ProjectComponent } from './project/project.component';
import { TypingEffectComponent } from './typing-effect/typing-effect.component';

@NgModule({
  declarations: [
    AppComponent,
    ExperienceComponent,
    HomeComponent,
    ProjectComponent,
    TypingEffectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
