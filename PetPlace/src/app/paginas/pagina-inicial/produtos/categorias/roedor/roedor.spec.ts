import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Roedor } from './roedor';

describe('Roedor', () => {
  let component: Roedor;
  let fixture: ComponentFixture<Roedor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Roedor]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Roedor);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
