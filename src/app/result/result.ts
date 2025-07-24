import { Component } from '@angular/core';
import { SciencesQuestions } from '../sciences-questions';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-result',
  imports: [RouterModule],
  templateUrl: './result.html',
  styleUrl: './result.css'
})
export class Result {
 score = 0;
  total = 0;

  constructor(public quizService: SciencesQuestions) {
    this.score = this.quizService.getScore();
    this.total = this.quizService.questions.length;
  }

}
