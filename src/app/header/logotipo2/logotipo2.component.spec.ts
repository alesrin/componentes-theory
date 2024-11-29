import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Logotipo2Component } from './logotipo2.component';

describe('Logotipo2Component', () => {
  let component: Logotipo2Component;
  let fixture: ComponentFixture<Logotipo2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Logotipo2Component]
    });
    fixture = TestBed.createComponent(Logotipo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
