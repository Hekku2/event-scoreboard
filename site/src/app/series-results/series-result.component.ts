import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SeriesScores } from '../shared/interfaces';
import { ScoreService } from '../shared/services';

@Component({
    selector: 'app-series-result',
    templateUrl: './series-result.component.html',
    styleUrls: ['./series-result.component.scss']
})
export class SeriesResultComponent {
    public showResults: Observable<boolean>;

    @Input() result: SeriesScores | undefined;

    public constructor(private scoreService: ScoreService) {
        this.showResults = this.scoreService.getCurrentCompetitor().pipe(map(m => !m || !m.isActive));
    }
}
