import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProjetModel } from '../../models/projet.model';
import { ProjectsService } from '../../services/projets.service';

@Component({
  selector: 'app-projets',
  templateUrl: './projets.component.html',
  styleUrls: ['./projets.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjetsComponent implements OnInit {

  loading$!: Observable<boolean>;
  projets$!: Observable<ProjetModel[]>;

  constructor(
    private projetsService: ProjectsService
  ) { }

  ngOnInit(): void {
    this.dragScroll('.card_group');
    this.initObservables();
    this.projetsService.getProjets();
  }

  private initObservables(): void {
    this.loading$ = this.projetsService.loading$;
    this.projets$ = this.projetsService.projets$;
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
