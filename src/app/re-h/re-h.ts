import { Component } from '@angular/core';
import { HistoiresQuestions } from '../histoire-questions';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-re-h',
  imports: [RouterModule],
  templateUrl: './re-h.html',
  styleUrl: './re-h.css'
})
export class ReH {
score = 0;
  total = 0;

  constructor(public quizService: HistoiresQuestions) {
    this.score = this.quizService.getScore();
    this.total = this.quizService.questions.length;
  }
}
