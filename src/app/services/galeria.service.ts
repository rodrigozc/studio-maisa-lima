import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class GaleriaService {

  constructor(private _http: Http) { }

  obterUltimasPostagens() {
    return this._http.get('/instagramRecent')
      .map(posts => posts.json())
      .catch(error => this.handleError(error, "Ocorreu um erro ao obter as últimas postagens"));
  }

  private handleError (error: Response, message: string) {
    return Observable.throw({message: message, detail: error || 'Server error'});
  }

}
