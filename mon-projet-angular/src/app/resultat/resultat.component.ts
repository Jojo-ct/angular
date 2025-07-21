import { Component, OnInit } from '@angular/core';
import { QuizService } from '../quiz/quiz.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  score: number = 0;
  totalQuestions: number = 0;

  constructor(private quizService: QuizService, private router: Router) {}

  ngOnInit() {
    this.score = this.quizService.getScore();
    this.totalQuestions = this.quizService['questions'].length; // accès direct pour demo
  }

  restartQuiz() {
    this.quizService.resetQuiz();
    this.router.navigate(['/quiz']);
  }
}
