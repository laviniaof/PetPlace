import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Desafios } from './desafios';

describe('Desafios', () => {
  let component: Desafios;
  let fixture: ComponentFixture<Desafios>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Desafios]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Desafios);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
