# Event Scoreboard

*This is currently in active development and not ready for production use yet.*

Scoreboard for events where results need to be shown for multiple leagues.

Scoreboard has 2 modes, slideshow and single score. **Slideshow** swaps
between all scores, showing multiple on screen at the same time.
**Single score** shows single score. This is meant to be shown while current
competitor is waiting for score.

Configurations (`config.json`)

1. `resultUrl` defines location for `allSeries.json`. This is downloaded periodically and
these scores are shown on page.
1. `seriesChangeTime` is the time interval for how long each series scores are
shown on screen.
1. `backgroundUpdateTime` is the time interval for how often the scores are
updated from `resultUrl`

Usage: Update `allSeries.json` with new results. These are shown automatically.
If single user needs to be shown, set `isActive` to `true` in `currentResult`.
To return back to normal slide show mode, set it back to `false`.


## Score format

`allSeries.json` example:

```json
{
    "currentResult": {
        "isActive": false,
        "participant": "The best participant",
        "score": ""
    },
    "allSeries": [
        {
            "seriesName": "Senior Women",
            "results": [
                "1. Competitor 1",
                "2. Competitor 2",
            ]
        },
        {
            "seriesName": "Senior Men",
            "results": [
                "1. Competitor 1",
                "2. Competitor 2",
                "3. Competitor 3",
                "4. Competitor 4",
            ]
        }
    ]
}

```
