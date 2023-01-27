import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CompetenceModel } from '../../models/competence.model';
import { CompetencesService } from '../../services/competence.service';

@Component({
  selector: 'app-competences',
  templateUrl: './competences.component.html',
  styleUrls: ['./competences.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CompetencesComponent implements OnInit {

  loading$!: Observable<boolean>;
  competences$!: Observable<CompetenceModel[]>;

  constructor(
    private competencesService: CompetencesService
  ) { }

  ngOnInit(): void {
    this.dragScroll('.card_group');
    this.initObservables();
    this.competencesService.getCompetences();
  }

  private initObservables(): void {
    this.loading$ = this.competencesService.loading$;
    this.competences$ = this.competencesService.competences$;
  }

  private dragScroll(element: string) {
    const slider = <HTMLElement>document.querySelector(`${element}`);
    if(slider) {
      let isDown = false;
      let startX: number;
      let scrollLeft: number;

      slider.addEventListener('mousedown', (e) => {
        isDown = true;
        e.stopPropagation();
        slider.classList.add('active_card');
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
      });

      slider.addEventListener('mouseleave', () => {
        isDown = false;
        slider.classList.remove('active_card');
      });

      slider.addEventListener('mouseup', () => {
        isDown = false;
      });

      slider.addEventListener('mousemove', (e) => {
        if(!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 2;
        slider.scrollLeft = scrollLeft - walk;
      });
    }
  }
}
