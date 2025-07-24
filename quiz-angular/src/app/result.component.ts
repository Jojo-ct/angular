import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { QuestionService } from './question.service';

@Component({
  standalone: true,
  selector: 'app-result',
  imports: [CommonModule, RouterModule],
  template: `
    <div class="result-container">
      <h1>Résultat du Quiz</h1>
      <p class="score">Votre score : <span>{{ service.score }}</span> / {{ service.questions.length }}</p>
      <button class="restart-btn" routerLink="/quiz" (click)="service.reset()">Recommencer</button>
    </div>
  `,
  styles: [`
    .result-container {
      max-width: 500px;
      margin: 60px auto;
      padding: 30px;
      background-color: #f0f8ff;
      border-radius: 12px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      text-align: center;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      color: #2c3e50;
    }

    h1 {
      font-size: 2.4rem;
      margin-bottom: 20px;
      color: #34495e;
    }

    .score {
      font-size: 1.6rem;
      margin-bottom: 30px;
      color: #27ae60;
      font-weight: 600;
    }

    .score span {
      font-size: 2rem;
      font-weight: 700;
      color: #2980b9;
    }

    .restart-btn {
      padding: 14px 40px;
      font-size: 1.1rem;
      background-color: #3498db;
      color: white;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      transition: background-color 0.3s ease;
      box-shadow: 0 3px 8px rgba(52, 152, 219, 0.4);
    }

    .restart-btn:hover {
      background-color: #2980b9;
    }

    /* Responsive */
    @media (max-width: 480px) {
      .result-container {
        margin: 40px 20px;
        padding: 20px;
      }

      h1 {
        font-size: 2rem;
      }

      .score {
        font-size: 1.3rem;
      }

      .restart-btn {
        width: 100%;
        padding: 12px 0;
      }
    }
  `]
})
export class ResultComponent {
  constructor(public service: QuestionService) {}
}
