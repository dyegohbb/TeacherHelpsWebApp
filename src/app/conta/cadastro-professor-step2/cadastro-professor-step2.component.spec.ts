import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroProfessorStep2Component } from './cadastro-professor-step2.component';

describe('CadastroProfessorStep2Component', () => {
  let component: CadastroProfessorStep2Component;
  let fixture: ComponentFixture<CadastroProfessorStep2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroProfessorStep2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroProfessorStep2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
