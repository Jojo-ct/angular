import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'quiz', pathMatch: 'full' },
  { 
    path: 'quiz', 
    loadComponent: () => import('./quiz.component').then(m => m.QuizComponent) 
  },
  { 
    path: 'result', 
    loadComponent: () => import('./result.component').then(m => m.ResultComponent) 
  },
  // Optionnel : page 404 si tu veux gérer les routes inconnues
  { path: '**', redirectTo: 'quiz' },
];
