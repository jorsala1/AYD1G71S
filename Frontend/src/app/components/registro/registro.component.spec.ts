import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistroComponent } from './registro.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';


describe('RegistroComponent', () => {
  let component: RegistroComponent;
  let fixture: ComponentFixture<RegistroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroComponent ],
      imports: [
        HttpClientTestingModule, RouterTestingModule.withRoutes([]),
        ReactiveFormsModule, FormsModule
      ]
    })
    .compileComponents();
  }));


  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(() => {
    component = new RegistroComponent(component.user, component.router);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Pruebas Genero', () => {
    it('Se hace prueba verificando valor del género femenino', function () {      
      expect(component.Genero("f")).toEqual("F");  
    });
  
    it('Se hace prueba verificando valor del género masculino', function () {
      expect(component.Genero("m")).toEqual("M");  
    });
  
  });

  describe('TDD PARA VERIFICAR CORREO CORRECTO ', () => {
    it('Comprobacion de correo correcto ', function () {
      expect(component.correoCorrecto('eje_mplo@gmail.com')).toBeTruthy();
    });

    it('Comprobacion de correo incorrecto ', function () {
      expect(component.correoCorrecto('ejemplogmail.com')).toBeFalsy();
    });

    it('Comprobacion de correo incorrecto ', function () {
      expect(component.correoCorrecto('ejemplo@gmailcom')).toBeFalsy();
    });

    it('Comprobacion de correo incorrecto', function () {
      expect(component.correoCorrecto('')).toBeFalsy();
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

  describe('TDD PARA METODO REGISTRAR', () => {

    it('Comprobacion de metodo registrar no se envia ningun dato', function () {
      expect(component.registrarse()).toBeFalsy();
    });

  });
});
