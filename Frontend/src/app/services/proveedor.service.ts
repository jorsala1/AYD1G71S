import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from 'rxjs/operators';

const baseUrl = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})

export class ProveedorService {

  ip:string="localhost";
  //ip2:string="192.168.1.8";
  constructor(private http: HttpClient) { }
  //para comunicarnos con json
  headers: HttpHeaders = new HttpHeaders({
    "Content-Type": "application/json"
  })

  RegistroProveedor(nombre: string,direccion: string,telefono: string,nombre_contacto: string) {
    //console.log(username,password);
    const url = "http://"+this.ip+":3000/prov/create";
    //comienza el post
    return this.http.post(
      url,
      {
        "nombre": nombre,
        "direccion": direccion,
        "telefono": telefono,
        "nombre_contacto": nombre_contacto,  
      },

      {
        headers: this.headers
      }
    ).pipe(map(data => data));
  }
}
