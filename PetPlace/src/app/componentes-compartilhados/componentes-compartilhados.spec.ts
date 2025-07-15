import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentesCompartilhados } from './componentes-compartilhados';

describe('ComponentesCompartilhados', () => {
  let component: ComponentesCompartilhados;
  let fixture: ComponentFixture<ComponentesCompartilhados>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentesCompartilhados]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentesCompartilhados);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
