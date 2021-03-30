import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from 'rxjs/operators';

//const baseUrl = 'http://192.168.0.3:3000';
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

  update(id : string, nombre: string,descripcion: string, cantidad:Number, compra:Number, venta:Number, categoria:Number) { 
    const url = baseUrl +"/products/updateProd";
    //comienza el put
    console.log("actualizar " + id)
    return this.http.put(
      url,
      {
        "id": id,
        "nombre_prod": nombre,
        "descripcion": descripcion,
        "cantidad": cantidad,
        "precio_compra": compra,
        "precio_venta": venta,
        "categoria": categoria
      },
      {
        headers: this.headers
      }
    ).pipe(map(data => data));
  }

  delete(id:string){
    console.log("Service delete " + id)
    return this.http.delete(`${baseUrl}/products/deleteProd/${id}`);
  }

  obtenerProductos(){
    const url= baseUrl+"/products";
    return this.http.get(url);
  }
}
