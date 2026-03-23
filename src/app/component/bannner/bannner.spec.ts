import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bannner } from './bannner';

describe('Bannner', () => {
  let component: Bannner;
  let fixture: ComponentFixture<Bannner>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bannner]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bannner);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
