import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Passaro } from './passaro';

describe('Passaro', () => {
  let component: Passaro;
  let fixture: ComponentFixture<Passaro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Passaro]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Passaro);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
