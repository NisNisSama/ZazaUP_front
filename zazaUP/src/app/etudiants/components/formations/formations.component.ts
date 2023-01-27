import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormationModel } from '../../models/formation.model';
import { FormationsService } from '../../services/formation.service';

@Component({
  selector: 'app-formations',
  templateUrl: './formations.component.html',
  styleUrls: ['./formations.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormationsComponent implements OnInit {

  loading$!: Observable<boolean>;
  formations$!: Observable<FormationModel[]>;

  constructor(
    private formationsService: FormationsService
  ) { }

  ngOnInit(): void {
    this.dragScroll('.card_group');
    this.initObservables();
    this.formationsService.getFormations();
  }

  private initObservables(): void {
    this.loading$ = this.formationsService.loading$;
    this.formations$ = this.formationsService.formations$;
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
