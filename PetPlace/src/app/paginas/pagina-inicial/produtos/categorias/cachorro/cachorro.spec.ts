import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cachorro } from './cachorro';

describe('Cachorro', () => {
  let component: Cachorro;
  let fixture: ComponentFixture<Cachorro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cachorro]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cachorro);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
