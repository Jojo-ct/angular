import { Component } from '@angular/core';
import { TechQuestions } from '../tech-questions';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-re-t',
  imports: [RouterModule],
  templateUrl: './re-t.html',
  styleUrl: './re-t.css'
})
export class ReT {
score = 0;
  total = 0;

  constructor(public quizService: TechQuestions) {
    this.score = this.quizService.getScore();
    this.total = this.quizService.questions.length;
  }
}
