import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Config } from "../interfaces";

@Injectable({
    providedIn: 'root',
})
export class ConfigService {
    constructor(private http: HttpClient) { }

    public currentConfig: Subject<Config> = new Subject<Config>();

    private configLocation: string = '../assets/config.json';

    public updateConfiguration(): void {
        this.http.get(this.configLocation).subscribe(configRaw => {
            this.currentConfig.next(configRaw as Config);
        });
    }
}
