import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscription, timer } from 'rxjs';
import { SeriesResultDto } from './shared/series-result-dto';
import { FilelistDto } from './shared/filelist-dto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  private subscription: Subscription = new Subscription();

  title = 'event-scoreboard';

  private seriesChangeTime = 5000;
  private backgroundUpdateTime = 10000;

  selectedIndex: number = 0;
  selectedSeries: SeriesResultDto | undefined;

  loadedResults: SeriesResultDto[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.subscription.add(timer(0, this.seriesChangeTime).subscribe(n => this.advanceSeries()));
    this.subscription.add(timer(0, this.backgroundUpdateTime).subscribe(n => this.updateResults()));
    this.selectedSeries = undefined;

    this.updateResults();
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  updateResults() {
    console.log('Updating results.');
    this.http.get('../assets/results/filelist.json').subscribe(
      data => {
        var filelistDto = data as FilelistDto;
        var files = filelistDto.files;
        console.log('Filelist fetched.');

        files.forEach(filename => {
          this.http.get(`../assets/results/${filename}`).subscribe(result => {
            console.log(result);
            var resultDto = result as SeriesResultDto;
            console.log(`Updating ${resultDto.seriesName}`);

            const match = this.loadedResults.find(s => s.seriesName === resultDto.seriesName)
            if (match) {
              match.results = resultDto.results;
            } else {
              this.loadedResults.push(resultDto);
            }
          });
        });
      }
    );
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
