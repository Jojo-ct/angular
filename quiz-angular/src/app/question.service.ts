import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class QuestionService {
  questions = [
    {
      question: 'Quel est le plus grand pays du monde ?',
      options: ['Chine', 'États-Unis', 'Russie', 'Canada', 'Pas de réponse juste'],
      answer: 'Russie',
    },
    {
      question: 'Combien y a-t-il de continents ?',
      options: ['5', '6', '7', '8', 'Pas de réponse juste'],
      answer: 'Pas de réponse juste',
    },
    {
      question: 'Qui a inventé Angular ?',
      options: ['Facebook', 'Google', 'Microsoft', 'Apple', 'Pas de réponse juste'],
      answer: 'Google',
    },
    {
      question: 'Dans quel pays se trouve ESGIS ?',
      options: ['Bénin', 'Algérie', 'Guiné', 'Burkina-faso', 'Pas de réponse juste'],
      answer: 'Pas de réponse juste', // corrigé de "Gabon" à "Pas de réponse juste"
    },
    {
      question: 'Comment exécuter un conteneur en arrière-plan ?',
      options: ['docker start', 'Pas de réponse juste', 'docker run -it'],
      answer: 'Pas de réponse juste',
    },
    {
      question: 'Quel fruit est souvent appelé le ROI DES FRUITS en Asie du Sud-Est ?',
      options: ['Durian', 'Avocat', 'Ananas', 'Banane', 'Pas de réponse juste'],
      answer: 'Durian',
    },
    {
      question: 'Dans quelle matière apprend-on les équations, les fonctions et les théorèmes ?',
      options: ['SVT', 'Mathématiques', 'Philosophie', 'Français', 'Pas de réponse juste'],
      answer: 'Mathématiques',
    },
    {
      question: 'Comment appelle-t-on le président du Bénin ?',
      options: ['AKODO Pauo', 'TALON Patrice', 'DIDA Baul', 'MISTER Bb', 'Pas de réponse juste'],
      answer: 'TALON Patrice',
    },
    {
      question: 'Combien de départements compte le Bénin ?',
      options: ['32', '45', '98', '12', 'Pas de réponse juste'],
      answer: '12',
    },
    {
      question: 'Un homme a combien de pieds ?',
      options: ['2', '8', '4', 'Pas de réponse juste'],
      answer: '2',
    }
  ];

  score = 0;

  checkAnswer(givenAnswer: string, correctAnswer: string): boolean {
    const isCorrect = givenAnswer === correctAnswer;
    if (isCorrect) this.score++;
    return isCorrect;
  }

  reset() {
    this.score = 0;
  }
}
