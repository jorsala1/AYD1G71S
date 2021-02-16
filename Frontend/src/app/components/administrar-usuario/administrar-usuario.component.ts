import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-administrar-usuario',
  templateUrl: './administrar-usuario.component.html',
  styleUrls: ['./administrar-usuario.component.scss']
})
export class AdministrarUsuarioComponent implements OnInit {

  constructor(private user:UsuarioService) { }

  nombre: string="";
  password: string="";
  apellidos: string=""; 
  correo: string="";
  telefono: string="";
  foto: string=""; 
  genero: string="";
  fechanac: string="";
  direccion: string="";
  username : string="";
  uploadedFiles: Array <File>;
  fotografia: string="";

  ngOnInit(): void {
  }

  modificar(){
    this.user.update(this.username,this.nombre,this.apellidos,this.correo,this.password, this.telefono,this.genero,this.fechanac)
    .subscribe((res)=>{
      console.log("ya modifico");
      console.log(res);      
    })
  }

  Genero(tipo:string){
    if(tipo=="m"){
      this.genero='M';
    }else if(tipo=="f"){
      this.genero='F';
    }
  }

  buscarUsuario(){
    console.log("buscando " + this.username)
    if (this.username != "") {
      this.user.getUsuario(this.username).subscribe((res)=>{
        console.log(res)  
      })
    }
  }

  darBajaUsuario(){
    this.user.delete(this.username).subscribe(
      res => {
        console.log(res);
      },
      err => console.error(err)
    );
  }

}
