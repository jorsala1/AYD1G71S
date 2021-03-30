import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { VerProductoComponent } from './ver-producto.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


describe('VerProductoComponent', () => {
  let component: VerProductoComponent;
  let fixture: ComponentFixture<VerProductoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerProductoComponent ],
      imports: [
        HttpClientTestingModule, RouterTestingModule.withRoutes([]),
        ReactiveFormsModule, FormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(() => {
    component = new VerProductoComponent(component.router,component.Producto );
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('TDD PARA VERIFICAR PRODUCTO ', () => {
    it('Comprobacion de id a modificar ', function () {
      expect(component.Modifica(2)).toBeFalsy();
    });

  });

  describe('TDD PARA VERIFICAR HABILITACION  ', () => {
    it('Comprobacion habilitacion ', function () {
      expect(component.habilitacion).not.toEqual("2");
    });
    it('Comprobacion habilitacion 2', function () {
      component.habilitacion="3";
      expect(component.habilitacion).toEqual("3");
    });
  });
});
