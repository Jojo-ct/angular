import { Component } from '@angular/core';
import { SciencesQuestions } from '../sciences-questions';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-sciences',
  imports: [CommonModule,FormsModule],
  templateUrl: './sciences.html',
  styleUrl: './sciences.css'
})
export class Sciences {
   selectedOption: number | null = null;

  constructor(public quizService:SciencesQuestions , private router: Router) {
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
      this.router.navigate(['/result']);
    } else {
      this.quizService.index_suivant();
      this.selectedOption = this.quizService.reponses_utilisateur[this.quizService.index_question_courant] ?? null;
    }
  }

}
