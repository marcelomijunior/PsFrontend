import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilParceiroComponent } from './perfil-parceiro.component';

describe('PerfilParceiroComponent', () => {
  let component: PerfilParceiroComponent;
  let fixture: ComponentFixture<PerfilParceiroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilParceiroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilParceiroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
