export interface AllSeries {
    allSeries: SeriesResultDto[];
    currentResult: CurrentResult | undefined;
}

export interface SeriesResultDto {
    seriesName: string;
    results: string[];
}

export interface CurrentResult {
    isActive: boolean;
    participant: string;
    score: string;
}
