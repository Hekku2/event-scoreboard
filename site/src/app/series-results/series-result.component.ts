import { Component, Input } from '@angular/core';
import { SeriesResultDto } from '../shared/series-result-dto';

@Component({
    selector: 'app-series-result',
    templateUrl: './series-result.component.html',
    styleUrls: []
})
export class SeriesResultComponent {
    @Input() result: SeriesResultDto | undefined;
}
