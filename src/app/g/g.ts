import { Component } from '@angular/core';
import { GéographieQuestions } from '../géographie-questions';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-g',
  imports: [FormsModule,CommonModule],
  templateUrl: './g.html',
  styleUrl: './g.css'
})
export class G {
selectedOption: number | null = null;

  constructor(public quizService:GéographieQuestions , private router: Router) {
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
      this.router.navigate(['/re-g']);
    } else {
      this.quizService.index_suivant();
      this.selectedOption = this.quizService.reponses_utilisateur[this.quizService.index_question_courant] ?? null;
    }
  }
}
