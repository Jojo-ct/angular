import { Injectable } from '@angular/core';
export interface Question{
  text:string
  options:string[]
  reponse:number
}
@Injectable({
  providedIn: 'root'
})

export class HistoiresQuestions {
 questions: Question[] = [
  {
    text: 'En quelle année a eu lieu la Révolution française ?',
    options: ['1789', '1776', '1815'],
    reponse: 0
  },
  {
    text: 'Qui était le premier président des États-Unis ?',
    options: ['Thomas Jefferson', 'George Washington', 'Abraham Lincoln'],
    reponse: 1
  },
  {
    text: 'Quel empire était dirigé par Jules César ?',
    options: ['Empire Ottoman', 'Empire Romain', 'Empire Byzantin'],
    reponse: 1
  },
  {
    text: 'Qui a découvert l’Amérique en 1492 ?',
    options: ['Christophe Colomb', 'Vasco de Gama', 'Ferdinand Magellan'],
    reponse: 0
  },
  {
    text: 'Quand a eu lieu la Première Guerre mondiale ?',
    options: ['1914-1918', '1939-1945', '1900-1905'],
    reponse: 0
  },
  {
    text: 'Qui a aboli l’esclavage en France en 1848 ?',
    options: ['Napoléon Bonaparte', 'Victor Schoelcher', 'Louis XIV'],
    reponse: 1
  },
  {
    text: 'Quel pays a colonisé le Bénin ?',
    options: ['Portugal', 'France', 'Allemagne'],
    reponse: 1
  },
  {
    text: 'Qui était Nelson Mandela ?',
    options: ['Un dictateur', 'Un roi africain', 'Un président sud-africain'],
    reponse: 2
  },
  {
    text: 'Quel mur est tombé en 1989 ?',
    options: ['Mur de Chine', 'Mur de Berlin', 'Mur de Jéricho'],
    reponse: 1
  },
  {
    text: 'Quel roi est connu pour la phrase « L’État, c’est moi » ?',
    options: ['Louis XVI', 'Louis XIV', 'Napoléon'],
    reponse: 1
  }
]
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



