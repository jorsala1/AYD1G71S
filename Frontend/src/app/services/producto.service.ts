import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from 'rxjs/operators';

const baseUrl = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  constructor(private http: HttpClient) { }

  headers: HttpHeaders = new HttpHeaders({
    "Content-Type": "application/json"
  })
  registro(producto){

    console.log(producto);
    const url= baseUrl+"/products/create";
    return this.http.post(
      url,
      producto,
      {
        headers:this.headers
      }
    ).pipe(map(data => data));
  }

  obtenerCategorias(){
    const url= baseUrl+"/categoria/";
    return this.http.get(url);
  }
  obtenerProductos(){
    const url= baseUrl+"/products";
    return this.http.get(url);
  }
}
