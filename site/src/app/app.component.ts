import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, timer } from 'rxjs';
import { SeriesResultDto } from './shared/series-result-dto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  private subscription: Subscription = new Subscription();

  title = 'event-scoreboard';

  private seriesChangeTime = 5000;

  selectedIndex: number = 0;
  selectedSeries: SeriesResultDto | undefined;

  mockResults: SeriesResultDto[] = [
    {
      seriesName: 'Senior Women',
      results: [
        '1. Meikäläinen, Maija',
        '1. Meikäläinen, Maija',
        '1. Meikäläinen, Maija',
        '1. Meikäläinen, Maija',
        '1. Meikäläinen, Maija',
        '1. Meikäläinen, Maija',
        '1. Meikäläinen, Maija',
        '1. Meikäläinen, Maija',
        '1. Meikäläinen, Maija'
      ]
    } as SeriesResultDto,
    {
      seriesName: 'Senior Men',
      results: [
        '1. Meikäläinen, Matti',
        '1. Meikäläinen, Matti',
        '1. Meikäläinen, Matti',
        '1. Meikäläinen, Matti',
        '1. Meikäläinen, Matti',
        '1. Meikäläinen, Matti',
        '1. Meikäläinen, Matti',
        '1. Meikäläinen, Matti',
        '1. Meikäläinen, Matti'
      ]
    } as SeriesResultDto,
    {
      seriesName: 'Junior A',
      results: [
        '1. Meikäläinen, Minna',
        '1. Meikäläinen, Minna',
        '1. Meikäläinen, Minna',
        '1. Meikäläinen, Minna',
        '1. Meikäläinen, Minna',
        '1. Meikäläinen, Minna',
        '1. Meikäläinen, Minna',
        '1. Meikäläinen, Minna',
        '1. Meikäläinen, Minna'
      ]
    } as SeriesResultDto,
    {
      seriesName: 'Junior B',
      results: [
        '1. Meikäläinen, Seija',
        '1. Meikäläinen, Seija',
        '1. Meikäläinen, Seija',
      ]
    } as SeriesResultDto,
  ]

  ngOnInit(): void {
    this.subscription.add(timer(0, this.seriesChangeTime).subscribe(n => this.advanceSeries()));

    this.selectedSeries = this.mockResults[this.selectedIndex];
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  advanceSeries() {
    this.selectedIndex = (this.selectedIndex + 1) % this.mockResults.length;
    this.selectedSeries = this.mockResults[this.selectedIndex];
  }

}
