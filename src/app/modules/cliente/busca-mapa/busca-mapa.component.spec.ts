import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscaMapaComponent } from './busca-mapa.component';

describe('BuscaMapaComponent', () => {
  let component: BuscaMapaComponent;
  let fixture: ComponentFixture<BuscaMapaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscaMapaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscaMapaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
