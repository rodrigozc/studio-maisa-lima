import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class ContatoService {

  constructor(private _http: Http) { }

  enviarEmail(email: any) {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: headers });
    return this._http.post('/sendMail', JSON.stringify(email), options)
      .map(res => res.json())
      .catch(error => this.handleError(error, "Ocorreu um erro ao enviar os dados de contato"));
  }

  private handleError (error: Response, message: string) {
    return Observable.throw({message: message, detail: error || 'Server error'});
  }

}
