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
    participants: string[];
    team: string;
    score: string;
}
