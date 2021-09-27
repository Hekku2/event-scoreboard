import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, timer } from 'rxjs';
import { CurrentResult, SeriesScores } from './shared/interfaces';
import { ConfigService, ScoreService } from './shared/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  private subscription: Subscription = new Subscription();

  title = 'event-scoreboard';

  selectedIndex: number = 0;
  selectedSeries: SeriesScores | undefined;
  currentCompetitor: CurrentResult | undefined;

  loadedResults: SeriesScores[] = [];

  constructor(private scoreService: ScoreService, private configService: ConfigService) { }

  ngOnInit(): void {

    this.configService.updateConfiguration();

    this.configService.currentConfig.subscribe(config => {
      this.scoreService.updateScores();
      this.advanceSeries();
      this.subscription.add(timer(0, config.seriesChangeTime).subscribe(n => this.advanceSeries()));
      this.subscription.add(timer(0, config.backgroundUpdateTime).subscribe(n => this.scoreService.updateScores()));
    });

    this.selectedSeries = undefined;

    this.listenForScoreboardChanges();
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private listenForScoreboardChanges() {
    this.scoreService.getCurrentScoreboard().subscribe(all => {
      all.forEach(resultDto => {
        const match = this.loadedResults.find(s => s.seriesName === resultDto.seriesName)
        if (match) {
          match.results = resultDto.results;
        } else {
          this.loadedResults.push(resultDto);
        }
      });
    });
  }

  advanceSeries() {
    console.log('Advancing');
    if (this.loadedResults.length === 0) {
      console.log('No results found.');
      this.selectedSeries = undefined;
      return;
    }
    this.selectedIndex = (this.selectedIndex + 1) % this.loadedResults.length;
    this.selectedSeries = this.loadedResults[this.selectedIndex];
  }

}
