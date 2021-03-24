import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AdministrarProductoComponent } from './administrar-producto.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AdministrarProductoComponent', () => {
  let component: AdministrarProductoComponent;
  let fixture: ComponentFixture<AdministrarProductoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministrarProductoComponent ],
      imports: [
        HttpClientTestingModule, RouterTestingModule.withRoutes([]),
        ReactiveFormsModule, FormsModule
      ]
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
