import { Component, OnInit } from '@angular/core';
import { QuizService } from './quiz.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  question: any;
  selectedOptionIndex: number | null = null;

  constructor(private quizService: QuizService, private router: Router) {}

  ngOnInit() {
    this.loadQuestion();
  }

  loadQuestion() {
    if (this.quizService.isQuizFinished()) {
      this.router.navigate(['/result']);
    } else {
      this.question = this.quizService.getCurrentQuestion();
      this.selectedOptionIndex = null;
    }
  }

  selectOption(index: number) {
    this.selectedOptionIndex = index;
  }

  submitAnswer() {
    if (this.selectedOptionIndex !== null) {
      this.quizService.answerQuestion(this.selectedOptionIndex);
      this.loadQuestion();
    }
  }
}
