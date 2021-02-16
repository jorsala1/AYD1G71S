import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from 'rxjs/operators';

const baseUrl = 'http://localhost:3000';

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
    const url = baseUrl+"/user/create";
    
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

  update(username : string, nombre: string,apellidos: string,correo : string, password: string, telefono:string ,genero: string,fechanac: string) {
    
    console.log("modificando " + username)
    console.log("nombre " + nombre)
    console.log("apellidos " + apellidos)
    console.log("correo " + correo)
    console.log("password " + password)
    console.log("telefono " + telefono)
    console.log("genero " + genero)
    console.log("fecha de nacimiento " + fechanac)
    
    const url = "http://"+this.ip+":3000/user/update";
    //comienza el put
    return this.http.put(
      url,
      {
        "Username": username,
        "Nombres": nombre,
        "Apellidos": apellidos,
        "Correo": correo,
        "Password": password,
        "Genero": genero,
        "Fecha_Nacimiento": fechanac,
        "Telefono": telefono  
      },
      {
        headers: this.headers
      }
    ).pipe(map(data => data));
  }

  delete(username:string){
    console.log("Service delete " + username)
    return this.http.delete(`http://${this.ip}:3000/user/delete/${username}`);
  }

  getUsuario(username :string){
    console.log("Entro a getUsuario")
    const url = "http://localhost:3000/app/getUsuario";
    //comienza el post
    return this.http.post(
      url,
      {
        "username" : username
      },
      {
        headers: this.headers
      }
      ).pipe(map(data => data));
    }

    login(usuario){

      const url= baseUrl+"/user/log";
      return this.http.post(
        url,
        usuario,
        {
          headers:this.headers
        }
    ).pipe(map(data => data));
  }

}