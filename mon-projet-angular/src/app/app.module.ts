import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { QuizComponent } from './quiz/quiz.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ResultComponent } from './result/result.component';

import { appRoutes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    QuizComponent,
    NavigationComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
