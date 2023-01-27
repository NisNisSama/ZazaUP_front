import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApprendreComponent } from './components/apprendre/apprendre.component';
import { ChatComponent } from './components/chat/chat.component';
import { DecouverteComponent } from './components/decouverte/decouverte.component';
import { HomeComponent } from './components/home/home.component';
import { QuestionComponent } from './components/question/question.component';
import { QuizzComponent } from './components/quizz/quizz.component';
import { RecompenseComponent } from './components/recompense/recompense.component';

const routes: Routes = [
  {
    path: '', 
    component: HomeComponent,
    children: [
      {path: 'decouverte', component: DecouverteComponent},
      {path: 'apprendre', component: ApprendreComponent},
      {path: 'quizz', component: QuizzComponent},
      {path: 'question', component: QuestionComponent},
      {path: 'chat', component: ChatComponent},
      {path: 'recompense', component: RecompenseComponent},
      {path: '', redirectTo: 'decouverte', pathMatch: 'prefix'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlaygroundRoutingModule { }
