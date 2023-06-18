import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Estado } from './estado.model';

@Injectable({
  providedIn: 'root'
})
export class EstadoService {

  baseUrl: String = environment.baseUrl;

  constructor(private http: HttpClient, private _snack: MatSnackBar) { }

  findAll():Observable<Estado[]>{
    const url = `${this.baseUrl}/estado`
      return this.http.get<Estado[]>(url)
  }

  findById(id: String):Observable<Estado>{
    const url = `${this.baseUrl}/estado/${id}`
    return this.http.get<Estado>(url)
  }

  create(estado: Estado): Observable<Estado>{
    const url = `${this.baseUrl}/estado`
    return this.http.post<Estado>(url, estado);
  }

  delete(id: String):Observable<void> {
    const url = `${this.baseUrl}/estado/${id}`
    return  this.http.delete<void>(url)
  }

  update(estado: Estado):Observable<void>{
    const url = `${this.baseUrl}/estado/${estado.id}`
    return this.http.put<void>(url, estado)
  }

  mensagem(str: String): void{
    this._snack.open(`${str}`,"OK", {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 3000
    })
  }

}
