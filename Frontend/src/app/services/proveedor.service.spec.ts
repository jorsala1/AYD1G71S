import { TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ProveedorService } from './proveedor.service';

describe('ProveedorService', () => {
  let service: ProveedorService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule, RouterTestingModule.withRoutes([]),
        ReactiveFormsModule, FormsModule
      ]
    });
    service = TestBed.inject(ProveedorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
