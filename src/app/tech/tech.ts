import { Component } from '@angular/core';
import { TechQuestions } from '../tech-questions';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tech',
  imports: [CommonModule,FormsModule],
  templateUrl: './tech.html',
  styleUrl: './tech.css'
})
export class Tech {
selectedOption: number | null = null;

  constructor(public quizService:TechQuestions , private router: Router) {
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
      this.router.navigate(['/re-t']);
    } else {
      this.quizService.index_suivant();
      this.selectedOption = this.quizService.reponses_utilisateur[this.quizService.index_question_courant] ?? null;
    }
  }
}
