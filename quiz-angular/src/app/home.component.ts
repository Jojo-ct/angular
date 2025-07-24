import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule],
  template: `
    <div style="text-align: center; margin-top: 100px;">
      <h1>JEU DE QUIZ</h1>
      <p>Cliquez sur le bouton ci-dessous pour commencer le quiz.</p>
      <button 
        style="padding: 10px 20px; font-size: 18px; cursor: pointer;"
        [routerLink]="['/quiz']"
      >
        Commencer le quiz
      </button>
    </div>
  `
})
export class HomeComponent {}
