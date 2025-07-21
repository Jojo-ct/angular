import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  private questions = [
    {
      question: 'Quelle est la capitale du Bénin ?',
      options: ['Cotonou', 'Porto-Novo', 'Abomey', 'Parakou'],
      answer: 1
    },
    {
      question: 'Combien y a-t-il de départements au Bénin ?',
      options: ['6', '10', '12', '15'],
      answer: 2
    },
    {
      question: 'Quelle est la monnaie officielle du Bénin ?',
      options: ['Franc CFA', 'Dollar', 'Euro', 'Livre Sterling'],
      answer: 0
    }
  ];

  private currentQuestionIndex = 0;
  private score = 0;

  getCurrentQuestion() {
    return this.questions[this.currentQuestionIndex];
  }

  answerQuestion(selectedIndex: number) {
    if (selectedIndex === this.questions[this.currentQuestionIndex].answer) {
      this.score++;
    }
    this.currentQuestionIndex++;
  }

  getScore() {
    return this.score;
  }

  isQuizFinished() {
    return this.currentQuestionIndex >= this.questions.length;
  }

  resetQuiz() {
    this.currentQuestionIndex = 0;
    this.score = 0;
  }
}
