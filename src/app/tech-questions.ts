import { Injectable } from '@angular/core';
export interface Question{
  text:string
  options:string[]
  reponse:number
}
@Injectable({
  providedIn: 'root'
})

export class TechQuestions {
 questions: Question[] =[
  {
    text: 'Quel langage est utilisé pour créer des pages web ?',
    options: ['Python', 'HTML', 'C++'],
    reponse: 1
  },
  {
    text: 'Quel est le système d’exploitation de Microsoft ?',
    options: ['macOS', 'Linux', 'Windows'],
    reponse: 2
  },
  {
    text: 'Que veut dire "www" ?',
    options: ['World Web Window', 'World Wide Web', 'Web World Web'],
    reponse: 1
  },
  {
    text: 'Qui a fondé Facebook ?',
    options: ['Bill Gates', 'Mark Zuckerberg', 'Steve Jobs'],
    reponse: 1
  },
  {
    text: 'Quel appareil permet de stocker des données ?',
    options: ['Imprimante', 'Disque dur', 'Moniteur'],
    reponse: 1
  },
  {
    text: 'Quel est le moteur de recherche de Google ?',
    options: ['Bing', 'Safari', 'Google'],
    reponse: 2
  },
  {
    text: 'Quel langage est populaire pour l’intelligence artificielle ?',
    options: ['Python', 'PHP', 'Ruby'],
    reponse: 0
  },
  {
    text: 'Quel réseau social appartient à Meta ?',
    options: ['Snapchat', 'WhatsApp', 'Twitter'],
    reponse: 1
  },
  {
    text: 'Qu’est-ce qu’une URL ?',
    options: ['Adresse web', 'Clé USB', 'Logiciel'],
    reponse: 0
  },
  {
    text: 'Quel est le navigateur par défaut d’Android ?',
    options: ['Edge', 'Chrome', 'Firefox'],
    reponse: 1
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



