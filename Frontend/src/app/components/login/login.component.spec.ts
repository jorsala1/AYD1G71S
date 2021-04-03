import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Component } from '@angular/core';

describe('LoginComponent', () => {
  let component;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [
        HttpClientTestingModule, RouterTestingModule.withRoutes([]),
        ReactiveFormsModule, FormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(() => {
    component = new LoginComponent(component.service, component.router);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //------------------------------------------------ INICIO DE PRUEBAS -------------------------------------------------
describe('Verifica que los valores iniciales esten vacios', () => {
  it('Se hace prueba verificando que los valores esten vacios', function () {
    const datos = {
      Username: '',
      Password: ''
    };
    expect(component.datos).toEqual(datos);

  });

  it('Se hace prueba verificando que los valores iniciales no contengan datos', function () {
    const datos = {
      Username: 'maria',
      Password: '12345678'
    };
    expect(component.datos).not.toEqual(datos);

  });

});
describe('TDD PARA USERNAME', () => {
  it('Comprobacion de username correcto', function () {
    expect(component.userNameCorrecto('ejemplo_12')).toContain('Cumple con el rango');
  });

  it('Comprobacion de username no correcto', function () {
    expect(component.userNameCorrecto('ejemplo1234567890')).toContain('No cumple con el rango');
  });
});

describe('TDD PARA METODO LOGIN', () => {

  it('Comprobacion de metodo login  no se envia ningun dato', function () {
    expect(component.logearse()).toBeFalsy();
  });

});

describe('Verifica la respuesta del login', () => {
  it('Se hace prueba con respuesta correcta del login', function () {
    const datos = {
      Username: 'JorgeS',
      Password: 'root'
    };
    component.logearse();
    expect(component.error).toBeFalsy();
  });

 
  it('Se hace prueba con respuesta incorrecta del login', async(()=> {
    const datos = {
      Username: 'JorgeS',
      Password: '1234'
    };
    component.datos.Username= datos.Username;
    component.datos.Password = datos.Password;
    component.username=datos.Username;
    component.password=datos.Password;
    component.logearse();
    expect(component.error).toBeFalsy();
  }));
  
  });
  describe('Guardar Datos', () => {

    it('Se hace prueba de guardar datos', function () {
      component.error=true;      
      expect(component.ObtenerDatos()).toBeFalsy();
    });
  
   

    });
  
});











