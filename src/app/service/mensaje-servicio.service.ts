import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MensajeServicioService {
  public baseURL: string = 'https://trabajoengrupo.vercel.app'
  public cartaURL: string = `${this.baseURL}/cartas`
  public mesasURL: string = `${this.baseURL}/mesas`


  constructor(private httpClient: HttpClient) { }

  public getCartas(): Observable<any> {
    return this.httpClient.get(this.cartaURL)
  }

  public getMesas(): Observable<any> {
    return this.httpClient.get(this.mesasURL)
  }
}
