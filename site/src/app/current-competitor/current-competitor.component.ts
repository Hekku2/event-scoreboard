import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CurrentResult } from '../shared/interfaces';
import { ScoreService } from '../shared/services';

@Component({
    selector: 'app-current-competitor',
    templateUrl: './current-competitor.component.html',
    styleUrls: ['current-competitor.component.scss']
})
export class CurrentCompetitorComponent {
    public currentResult: Observable<CurrentResult>;

    public constructor(private scoreService: ScoreService) {
        this.currentResult = this.scoreService.getCurrentCompetitor();
    }
}
