import { Component } from '@angular/core';
import { GéographieQuestions } from '../géographie-questions';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-re-g',
  imports: [RouterModule],
  templateUrl: './re-g.html',
  styleUrl: './re-g.css'
})
export class ReG {
score = 0;
  total = 0;

  constructor(public quizService: GéographieQuestions) {
    this.score = this.quizService.getScore();
    this.total = this.quizService.questions.length;
  }
}
