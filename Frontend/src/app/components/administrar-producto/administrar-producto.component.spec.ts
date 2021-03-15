import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrarProductoComponent } from './administrar-producto.component';

describe('AdministrarProductoComponent', () => {
  let component: AdministrarProductoComponent;
  let fixture: ComponentFixture<AdministrarProductoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministrarProductoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministrarProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
