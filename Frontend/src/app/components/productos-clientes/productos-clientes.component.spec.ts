import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosClientesComponent } from './productos-clientes.component';

describe('ProductosClientesComponent', () => {
  let component: ProductosClientesComponent;
  let fixture: ComponentFixture<ProductosClientesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductosClientesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductosClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
