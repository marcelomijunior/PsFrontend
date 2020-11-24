import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricoPetsComponent } from './historico-pets.component';

describe('HistoricoPetsComponent', () => {
  let component: HistoricoPetsComponent;
  let fixture: ComponentFixture<HistoricoPetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoricoPetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoricoPetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
