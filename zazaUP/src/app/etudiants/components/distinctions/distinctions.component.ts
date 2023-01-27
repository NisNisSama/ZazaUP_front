import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DistinctionModel } from '../../models/distinction.model';
import { DistinctionsService } from '../../services/distinction.service';

@Component({
  selector: 'app-distinctions',
  templateUrl: './distinctions.component.html',
  styleUrls: ['./distinctions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DistinctionsComponent implements OnInit {

  loading$!: Observable<boolean>;
  distinctions$!: Observable<DistinctionModel[]>;

  constructor(
    private distinctionsService: DistinctionsService
  ) { }

  ngOnInit(): void {
    this.dragScroll('.card_group');
    this.initObservables();
    this.distinctionsService.getDistinctions();
  }

  private initObservables(): void {
    this.loading$ = this.distinctionsService.loading$;
    this.distinctions$ = this.distinctionsService.distinctions$;
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
