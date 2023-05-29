import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Fornec } from './fornecedores';

@Injectable({
  providedIn: 'root'
})
export class FornecService {

  url = "http://localhost:3000/fornecedores";

  constructor(private http: HttpClient) { }

  getFornec(): Observable<Fornec[]>{
    return this.http.get<Fornec[]>(this.url);
  }
  saveFornec(cliente: Fornec): Observable<Fornec>{
    return this.http.post<Fornec>(this.url, cliente);
  }

  delFornec(cliente: Fornec): Observable<void>{
    return this.http.delete<void>(this.url + "/" + cliente.id);
  }

  updateFornec(cliente: Fornec): Observable<Fornec>{
    return this.http.put<Fornec>(this.url + "/" + cliente.id, cliente);
  }
}
