import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AppSecretConstants} from "../app.secret-consts";
import {first} from "rxjs/operators";
import {Observable} from "rxjs";
import {NameSettings} from "../constants/name.settings";

@Injectable({
  providedIn: 'root'
})
export class NameService {
  private readonly enemyNameHeaders: HttpHeaders;
  private readonly heroNameHeaders: HttpHeaders;

  constructor(private http: HttpClient) {
    this.enemyNameHeaders = new HttpHeaders({
      'accept': '*/*',
      'X-Api-Key': AppSecretConstants.ENEMY_NAME_API_KEY
    });
    this.heroNameHeaders = new HttpHeaders({
      'accept': '*/*'
    });
  }

  getEnemyName(): Observable<string> {
    return this.sendRequest(NameSettings.PROXY_URL + NameSettings.ENEMY_NAME_URL, this.enemyNameHeaders);
  }

  getHeroName(): Observable<string> {
    return this.sendRequest(NameSettings.PROXY_URL + NameSettings.HERO_NAME_URL, this.heroNameHeaders);
  }

  prepareName(name: string | string[]) {
    if (typeof name !== "string") {
      name = name[0];
    }
    return name.split(" ")[0];
  }

  private sendRequest(url: string, headers: HttpHeaders): Observable<string> {
    return this.http.get<string>(url, {headers: headers}).pipe(
      first()
    );
  }

}
