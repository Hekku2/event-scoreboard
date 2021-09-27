import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from 'rxjs/operators';
import { Observable } from "rxjs";
import { AllSeries } from "../interfaces";

@Injectable({
    providedIn: 'root',
})
export class ScoreService {
    constructor(private http: HttpClient) { }

    public getScores(): Observable<AllSeries> {
        console.log('Fetching new scores.')
        return this.http.get('../assets/results/allSeries.json').pipe(
            map(rawData => {
                var allSeries = rawData as AllSeries;
                return allSeries;
            })
        );
    }
}
