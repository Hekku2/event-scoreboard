import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { EventScoreboardStatus, CurrentResult, SeriesScores } from "../interfaces";

@Injectable({
    providedIn: 'root',
})
export class ScoreService {
    constructor(private http: HttpClient) { }

    private currentCompetitor: Subject<CurrentResult> = new Subject<CurrentResult>();
    private currentScoreboard: Subject<SeriesScores[]> = new Subject<SeriesScores[]>();

    public getCurrentCompetitor(): Observable<CurrentResult> {
        return this.currentCompetitor.asObservable();
    }

    public getCurrentScoreboard(): Observable<SeriesScores[]> {
        return this.currentScoreboard.asObservable();
    }

    public updateScores(): void {
        this.http.get('../assets/results/allSeries.json').subscribe(rawResult => {
            var allSeries = rawResult as EventScoreboardStatus;
            this.currentCompetitor.next(allSeries.currentResult);
            this.currentScoreboard.next(allSeries.allSeries);
        });
    }
}
