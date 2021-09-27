import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurrentCompetitorComponent } from './current-competitor/current-competitor.component';
import { SeriesResultComponent } from './series-results/series-result.component';
import { ConfigService } from './shared/services/config.service';
import { ScoreService } from './shared/services/score.service';

@NgModule({
  declarations: [
    AppComponent,
    SeriesResultComponent,
    CurrentCompetitorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    ScoreService,
    ConfigService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
