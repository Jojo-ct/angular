import { Injectable } from '@angular/core';
export interface Question{
  text:string
  options:string[]
  reponse:number
}
@Injectable({
  providedIn: 'root'
})

export class SportsQuestions {
 questions: Question[] = [
  {
    text: 'Combien de joueurs dans une équipe de football ?',
    options: ['11', '9', '10'],
    reponse: 0
  },
  {
    text: 'Quel pays a remporté la Coupe du Monde 2018 ?',
    options: ['Brésil', 'France', 'Allemagne'],
    reponse: 1
  },
  {
    text: 'Combien de points pour un panier à 3 points au basket ?',
    options: ['2', '3', '1'],
    reponse: 1
  },
  {
    text: 'Quel sport utilise une raquette et un volant ?',
    options: ['Tennis', 'Badminton', 'Ping-pong'],
    reponse: 1
  },
  {
    text: 'Qui est surnommé "la Pulga" ?',
    options: ['Cristiano Ronaldo', 'Messi', 'Neymar'],
    reponse: 1
  },
  {
    text: 'Quel pays a organisé les JO de 2021 ?',
    options: ['Japon', 'Brésil', 'France'],
    reponse: 0
  },
  {
    text: 'Combien de temps dure un match de football ?',
    options: ['60 min', '90 min', '120 min'],
    reponse: 1
  },
  {
    text: 'Quel est le sport le plus pratiqué au monde ?',
    options: ['Basket', 'Cricket', 'Football'],
    reponse: 2
  },
  {
    text: 'Dans quel sport trouve-t-on les Grands Chelems ?',
    options: ['Rugby', 'Tennis', 'Golf'],
    reponse: 1
  },
  {
    text: 'Quel athlète est connu pour sa vitesse ?',
    options: ['Usain Bolt', 'Mo Farah', 'Michael Phelps'],
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



