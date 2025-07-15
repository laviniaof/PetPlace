import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrieSuaConta } from './crie-sua-conta';

describe('CrieSuaConta', () => {
  let component: CrieSuaConta;
  let fixture: ComponentFixture<CrieSuaConta>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrieSuaConta]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrieSuaConta);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
