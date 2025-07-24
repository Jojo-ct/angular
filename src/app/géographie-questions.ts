import { Injectable } from '@angular/core';
export interface Question{
  text:string
  options:string[]
  reponse:number
}
@Injectable({
  providedIn: 'root'
})
export class GéographieQuestions {
  questions: Question[] = [
  {
    text: 'Quel est le plus grand continent ?',
    options: ['Afrique', 'Asie', 'Europe'],
    reponse: 1
  },
  {
    text: 'Quel fleuve traverse l’Égypte ?',
    options: ['Le Nil', 'Le Congo', 'L’Amazone'],
    reponse: 0
  },
  {
    text: 'Quel est le plus grand désert du monde ?',
    options: ['Sahara', 'Gobi', 'Kalahari'],
    reponse: 0
  },
  {
    text: 'Quelle est la capitale du Canada ?',
    options: ['Toronto', 'Ottawa', 'Montréal'],
    reponse: 1
  },
  {
    text: 'Combien de pays compte l’Union africaine ?',
    options: ['54', '50', '60'],
    reponse: 0
  },
  {
    text: 'Quel pays a pour capitale Abuja ?',
    options: ['Bénin', 'Nigeria', 'Ghana'],
    reponse: 1
  },
  {
    text: 'Quel est le plus grand océan du monde ?',
    options: ['Atlantique', 'Indien', 'Pacifique'],
    reponse: 2
  },
  {
    text: 'Le mont Kilimandjaro se trouve dans quel pays ?',
    options: ['Kenya', 'Tanzanie', 'Éthiopie'],
    reponse: 1
  },
  {
    text: 'Quelle est la capitale de l’Australie ?',
    options: ['Sydney', 'Melbourne', 'Canberra'],
    reponse: 2
  },
  {
    text: 'Quel pays est entièrement enclavé par l’Afrique du Sud ?',
    options: ['Lesotho', 'Swaziland', 'Botswana'],
    reponse: 0
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
