import { Component } from '@angular/core';
import { SportsQuestions } from '../sports-questions';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-sports',
  imports: [CommonModule,FormsModule],
  templateUrl: './sports.html',
  styleUrl: './sports.css'
})
export class Sports {
 selectedOption: number | null = null;

  constructor(public quizService:SportsQuestions , private router: Router) {
    this.selectedOption = this.quizService.reponses_utilisateur[this.quizService.index_question_courant] ?? null;
  }

  onOptionSelected(index: number) {
    this.quizService.answerQuestion(index);
  }

  prevQuestion() {
    this.quizService.index_précédent();
    this.selectedOption = this.quizService.reponses_utilisateur[this.quizService.index_question_courant] ?? null;
  }

  nextOrFinish() {
    if (this.quizService.isLastQuestion()) {
      this.router.navigate(['/re-s']);
    } else {
      this.quizService.index_suivant();
      this.selectedOption = this.quizService.reponses_utilisateur[this.quizService.index_question_courant] ?? null;
    }
  }

}
