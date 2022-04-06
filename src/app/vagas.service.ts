import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
import { vagas } from './models/vagas.model';
@Injectable({
  providedIn: 'root'
})
export class VagasService {


   private url = "http://localhost:3000/vagas";
  constructor(private _httpClient: HttpClient) { }

getVagas ():Observable<vagas[]>{
  return this._httpClient.get<vagas[]>(this.url);
}

cadastrarVaga (vagas:vagas ):Observable<vagas[]>{ 
  return this._httpClient.post<vagas[]>(this.url,vagas); 


}
atualizarVaga(id:any ,vaga: vagas):Observable<vagas[]>{
  const urlAtualizar = `${this.url}/${id}`;
  return this._httpClient.put<vagas[]>(urlAtualizar,vaga);
}

removerVaga(id:any):Observable<vagas[]>{
  const urlDeletar = `${this.url}/${id}`;
  return this._httpClient.delete<vagas[]>(urlDeletar);
}

}
