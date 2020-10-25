import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendaDetalheComponent } from './agenda-detalhe.component';

describe('AgendaDetalheComponent', () => {
  let component: AgendaDetalheComponent;
  let fixture: ComponentFixture<AgendaDetalheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgendaDetalheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgendaDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
