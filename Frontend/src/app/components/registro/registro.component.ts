import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  constructor(private user:UsuarioService,public router: Router) { }

  nombre: string="";
  password: string="";
  apellidos: string=""; 
  correo: string="";
  genero: string="";
  fechanac: string="";
  username : string="";

  ngOnInit(): void {
  }

  registrarse(){
   // console.log(this.fechanac);
    this.user.singup(this.username,this.nombre,this.apellidos,this.correo,this.password,this.genero,this.fechanac)
    .subscribe((res)=>{
      console.log("ya insertó");
      console.log(res);    
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

  
  Genero(tipo:string){
    if(tipo=="m"){
      this.genero='M';
    }else if(tipo=="f"){
      this.genero='F';
    }
  }

}
