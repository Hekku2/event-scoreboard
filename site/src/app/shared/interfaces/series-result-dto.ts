export interface EventScoreboardStatus {
    allSeries: SeriesScores[];
    currentResult: CurrentResult | undefined;
}

export interface SeriesScores {
    seriesName: string;
    results: string[];
}

export interface CurrentResult {
    isActive: boolean;
    participant: string;
    score: string;
}
