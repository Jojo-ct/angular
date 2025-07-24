import { Component } from '@angular/core';
import { SportsQuestions } from '../sports-questions';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-re-s',
  imports: [RouterModule],
  templateUrl: './re-s.html',
  styleUrl: './re-s.css'
})
export class ReS {
score = 0;
  total = 0;

  constructor(public quizService: SportsQuestions) {
    this.score = this.quizService.getScore();
    this.total = this.quizService.questions.length;
  }
}
