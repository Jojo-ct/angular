import { Injectable } from '@angular/core';
export interface Question{
  text:string
  options:string[]
  reponse:number
}
@Injectable({
  providedIn: 'root'
})

export class SciencesQuestions {
 questions: Question[] = [
  {
    text: 'Quelle planète est la plus proche du Soleil ?',
    options: ['Vénus', 'Mercure', 'Mars'],
    reponse: 1
  },
  {
    text: 'Quel est l’état de l’eau à 100°C ?',
    options: ['Solide', 'Liquide', 'Gazeux'],
    reponse: 2
  },
  {
    text: 'Combien de continents existe-t-il ?',
    options: ['5', '6', '7'],
    reponse: 2
  },
  {
    text: 'Quel gaz les plantes absorbent-elles ?',
    options: ['Oxygène', 'Dioxyde de carbone', 'Azote'],
    reponse: 1
  },
  {
    text: 'Quel organe pompe le sang dans le corps humain ?',
    options: ['Le foie', 'Le cœur', 'Les reins'],
    reponse: 1
  },
  {
    text: 'Quelle est la plus grande planète du système solaire ?',
    options: ['Saturne', 'Jupiter', 'Uranus'],
    reponse: 1
  },
  {
    text: 'De quoi est principalement constituée la Terre ?',
    options: ['Roche', 'Gaz', 'Eau'],
    reponse: 0
  },
  {
    text: 'Quel est l’organe principal de la respiration ?',
    options: ['Le cœur', 'Le poumon', 'L’estomac'],
    reponse: 1
  },
  {
    text: 'Quelle est la formule chimique de l’eau ?',
    options: ['H2O', 'CO2', 'O2'],
    reponse: 0
  },
  {
    text: 'Quelle étoile est au centre de notre système solaire ?',
    options: ['Lune', 'Mars', 'Soleil'],
    reponse: 2
  }
];
  index_question_courant:number=0
  reponses_utilisateur:number[]=[]
  question_courant():Question{
    return this.questions[this.index_question_courant]
  }
  index_suivant(){
     if (this.index_question_courant < this.questions.length - 1){
    this.index_question_courant=this.index_question_courant+1
  }
}
  index_précédent(){
      if (this.index_question_courant > 0) {
      this.index_question_courant--;
    }

  }
  answerQuestion(answerIndex: number) {
    this.reponses_utilisateur[this.index_question_courant] = answerIndex;
  }

   isLastQuestion(): boolean {
    return this.index_question_courant === this.questions.length - 1;
  }

  getScore(): number {
    let score = 0;
    this.reponses_utilisateur.forEach((ans, i) => {
      if (ans === this.questions[i].reponse) score++;
    });
    return score;
  }

  reset() {
    this.index_question_courant = 0;
    this.reponses_utilisateur = [];
  }
}


