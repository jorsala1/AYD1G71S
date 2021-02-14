import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  ip:string="localhost";
  //ip2:string="192.168.1.8";
  constructor(private http: HttpClient) { }
  //para comunicarnos con json
  headers: HttpHeaders = new HttpHeaders({
    "Content-Type": "application/json"
  })

  singup(username : string, nombre: string,apellidos: string,correo : string, password: string ,genero: string,fechanac: string) {
    //console.log(username,password);
    //const url = "http://"+this.puerto+":3000/app/registro";
    const url = "http://"+this.ip+":3000/user/create";
    //comienza el post
    return this.http.post(
      url,
      {
        "Username": username,
        "Nombres": nombre,
        "Apellidos": apellidos,
        "Correo": correo,
        "Password": password,
        "Genero": genero,
        "Fecha_Nacimiento": fechanac,
        "rol":3    
      },

      {
        headers: this.headers
      }
    ).pipe(map(data => data));
  }
}
