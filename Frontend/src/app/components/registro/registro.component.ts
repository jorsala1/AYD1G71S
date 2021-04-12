import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Router } from '@angular/router';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  constructor(public user:UsuarioService,public router: Router) { }

  nombre: string="";
  password: string="";
  apellidos: string=""; 
  correo: string="";
  genero: string="";
  fechanac: string="";
  username : string="";

  ngOnInit(): void {
  }

  userNameCorrecto(username: string): string {
    if(username.length >= 4 && username.length <=15)
    {
      return 'Cumple con el rango'
    }
    
    return 'No cumple con el rango';
  }

  correoCorrecto(correo: string): boolean{

    const exp = /^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;

    if(exp.test(correo))
    {
      return true;
    }
    return false;
  }
  
  registrarse(){
    if(this.correoCorrecto(this.correo)&&(this.userNameCorrecto(this.username)=="Cumple con el rango"))
    {
    this.user.singup(this.username,this.nombre,this.apellidos,this.correo,this.password,this.genero,this.fechanac)
    .subscribe((res)=>{  
      alert("USUARIO CREADO CON ÉXITO");
      this.nombre="";
      this.password="";
      this.apellidos=""; 
      this.correo="";
      this.genero="";
      this.fechanac="";
      this.username="";
      this.router.navigate(['/']);
    },
    err => {alert("NO SE PUDO CREAR EL USUARIO")}  
    )
  }
  }

  
  Genero(tipo:string): string{
    if(tipo=="m"){
      this.genero='M';
      return this.genero;
    }else if(tipo=="f"){
      this.genero='F';
      return this.genero;
    }
  }

}
