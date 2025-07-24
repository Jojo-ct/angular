import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { QuestionService } from './question.service';

@Component({
  standalone: true,
  selector: 'app-quiz',
  imports: [CommonModule, RouterModule],
  template: `
    <div class="quiz-container">
      <!-- Écran d'accueil -->
      <div *ngIf="!started" class="intro">
        <h1>QUIZ INTERACTIF</h1>
        <p>Testez vos connaissances dès maintenant !</p>
        <button (click)="startQuiz()">Commencer le quiz</button>
      </div>

      <!-- Affichage des questions -->
      <div *ngIf="started && currentQuestionIndex < service.questions.length" class="question-card">
        <h2>Question {{ currentQuestionIndex + 1 }} / {{ service.questions.length }}</h2>
        <p>{{ currentQuestion.question }}</p>
        <ul>
          <li *ngFor="let opt of currentQuestion.options">
            <button (click)="chooseAnswer(opt)">{{ opt }}</button>
          </li>
        </ul>

        <!-- Bouton Retour -->
        <button 
          class="back-button" 
          (click)="previousQuestion()" 
          [disabled]="currentQuestionIndex === 0">
          ⬅️ Retour
        </button>
      </div>

      <!-- Fin du quiz -->
      <div *ngIf="started && currentQuestionIndex >= service.questions.length" class="result-screen">
        <h2>Quiz terminé !</h2>
        <button (click)="goToResult()">Voir le résultat</button>
      </div>
    </div>
  `,
  styles: [`
    .quiz-container {
      max-width: 600px;
      margin: 40px auto;
      padding: 20px;
      background-color: #f8f9fa;
      border-radius: 15px;
      box-shadow: 0 0 15px rgba(0,0,0,0.1);
      font-family: 'Segoe UI', sans-serif;
      text-align: center;
    }

    h1 {
      color: #2c3e50;
      margin-bottom: 10px;
    }

    p {
      font-size: 1.1rem;
      color: #555;
    }

    .intro button,
    .question-card button:not(.back-button),
    .result-screen button {
      padding: 12px 25px;
      font-size: 1rem;
      margin-top: 20px;
      background-color: #3f1477;
      border: none;
      color: white;
      border-radius: 8px;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }

    .question-card .back-button {
      margin-top: 15px;
      background-color: #c0392b;
      color: white;
      font-size: 0.9rem;
      padding: 10px 20px;
    }

    .question-card .back-button:disabled {
      background-color: #ccc;
      cursor: not-allowed;
    }

    button:hover:not(:disabled) {
      background-color: #2c3e50;
    }

    ul {
      list-style: none;
      padding: 0;
      margin-top: 20px;
    }

    li {
      margin-bottom: 15px;
    }

    li button {
      width: 100%;
      padding: 10px;
      background-color: #ecf0f1;
      border: 1px solid #bdc3c7;
      border-radius: 6px;
      font-size: 1rem;
      color: #2c3e50;
    }

    li button:hover {
      background-color: #d0e8f2;
    }

    .result-screen h2 {
      color: #27ae60;
    }
  `]
})
export class QuizComponent {
  started = false;
  currentQuestionIndex = 0;

  constructor(public service: QuestionService, private router: Router) {}

  get currentQuestion() {
    return this.service.questions[this.currentQuestionIndex];
  }

  startQuiz() {
    this.started = true;
    this.currentQuestionIndex = 0; // remet à zéro si on recommence
    this.service.reset();
  }

  chooseAnswer(option: string) {
    this.service.checkAnswer(option, this.currentQuestion.answer);
    this.currentQuestionIndex++;
  }

  previousQuestion() {
    if (this.currentQuestionIndex > 0) this.currentQuestionIndex--;
  }

  goToResult() {
    this.router.navigate(['/result']);
  }
}
