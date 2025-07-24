import { Component } from '@angular/core';
import { HistoiresQuestions } from '../histoire-questions';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-histoire',
  imports: [CommonModule,FormsModule],
  templateUrl: './histoire.html',
  styleUrl: './histoire.css'
})
export class Histoire {
 selectedOption: number | null = null;

  constructor(public quizService:HistoiresQuestions , private router: Router) {
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
      this.router.navigate(['/re-h']);
    } else {
      this.quizService.index_suivant();
      this.selectedOption = this.quizService.reponses_utilisateur[this.quizService.index_question_courant] ?? null;
    }
  }
}
