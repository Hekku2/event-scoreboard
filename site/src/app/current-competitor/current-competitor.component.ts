import { Component, Input } from '@angular/core';
import { CurrentResult } from '../shared/interfaces';

@Component({
    selector: 'app-current-competitor',
    templateUrl: './current-competitor.component.html',
    styleUrls: []
})
export class CurrentCompetitorComponent {
    @Input() current: CurrentResult | undefined;
}
