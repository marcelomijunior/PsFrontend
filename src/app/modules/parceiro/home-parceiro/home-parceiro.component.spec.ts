import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeParceiroComponent } from './home-parceiro.component';

describe('HomeParceiroComponent', () => {
  let component: HomeParceiroComponent;
  let fixture: ComponentFixture<HomeParceiroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeParceiroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeParceiroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
