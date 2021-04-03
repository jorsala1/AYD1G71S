import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistroProveedorComponent } from './registro-proveedor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';


describe('RegistroProveedorComponent', () => {
  let component: RegistroProveedorComponent;
  let fixture: ComponentFixture<RegistroProveedorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroProveedorComponent ],
      imports: [
        HttpClientTestingModule, RouterTestingModule.withRoutes([]),
        ReactiveFormsModule, FormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroProveedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(() => {
    component = new RegistroProveedorComponent(component.proveedor, component.router);
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Verifica que los valores iniciales esten vacios', () => {
    it('Se hace prueba verificando que los valores esten vacios', function () {
      expect(component.contacto).toEqual("");
      expect(component.direccion).toEqual("");
      expect(component.nombre).toEqual("");
      expect(component.telefono).toEqual("");
    });
  
  
  });
});
