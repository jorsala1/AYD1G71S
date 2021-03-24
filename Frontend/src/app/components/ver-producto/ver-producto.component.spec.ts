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

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
