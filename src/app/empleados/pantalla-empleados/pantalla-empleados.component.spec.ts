import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PantallaEmpleadosComponent } from './pantalla-empleados.component';

describe('PantallaEmpleadosComponent', () => {
  let component: PantallaEmpleadosComponent;
  let fixture: ComponentFixture<PantallaEmpleadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PantallaEmpleadosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PantallaEmpleadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
