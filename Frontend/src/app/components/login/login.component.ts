import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Router } from '@angular/router';
import jwt_decode from 'jwt-decode';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public service: UsuarioService, public router: Router) { }

  ngOnInit(): void {
  }
  username: string=""; 
  password: string="";
  decoded: any = [];
  respuesta: any = [];
  roles: any=[];
  token: string ="";
  datos = {
    Username: '',
    Password: ''
  };

  logearse(){
    this.datos.Username = this.username;
    this.datos.Password = this.password;
   // console.log(this.datos);
    this.service.login(this.datos)
    .subscribe(
      res => {
        this.respuesta = res;
        console.log(this.respuesta);         
        this.token=this.respuesta.token;
        if(this.respuesta.token != "")
        {
          this.decoded = jwt_decode(this.respuesta.token);
         // console.log(this.decoded);
          this.almacenar();            
          this.router.navigate(['/principal']);
        }
      },
      err => {alert("USUARIO INCORRECTO")}
    )
  }

  almacenar()
  {
    localStorage.setItem('llave',this.token);
    localStorage.setItem('CodigoUsuario',this.decoded.user.CodigoUsuario);
    localStorage.setItem('Username',this.decoded.user.Username);
    localStorage.setItem('Nombres',this.decoded.user.Nombres);
    localStorage.setItem('Apellidos',this.decoded.user.Apellidos);
    localStorage.setItem('Correo',this.decoded.user.Correo);
    localStorage.setItem('Password',this.decoded.user.Password);
    localStorage.setItem('Fecha_Nac',this.decoded.user.Fecha_Nacimiento);
    localStorage.setItem('Rol',this.decoded.user.rol);
  //  localStorage.setItem('roles', JSON.stringify(this.roles));
    
    
    
  }

}
