import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlaygroundRoutingModule } from './playground-routing.module';
import { HomeComponent } from './components/home/home.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { HeaderComponent } from './components/header/header.component';
import { DecouverteComponent } from './components/decouverte/decouverte.component';
import { ApprendreComponent } from './components/apprendre/apprendre.component';
import { QuizzComponent } from './components/quizz/quizz.component';
import { QuestionComponent } from './components/question/question.component';
import { ChatComponent } from './components/chat/chat.component';
import { QuestionService } from './services/question.service';
import { ReactiveFormsModule } from '@angular/forms';
import { RecompenseComponent } from './components/recompense/recompense.component';
import { DecouverteService } from './services/decouverte.service';
import { HeaderService } from './services/header.service';


@NgModule({
  declarations: [
    HomeComponent,
    SidenavComponent,
    HeaderComponent,
    DecouverteComponent,
    ApprendreComponent,
    QuizzComponent,
    QuestionComponent,
    ChatComponent,
    RecompenseComponent
  ],
  imports: [
    CommonModule,
    PlaygroundRoutingModule,
    ReactiveFormsModule
  ],
  providers: [QuestionService, DecouverteService, HeaderService]
})
export class PlaygroundModule { }
