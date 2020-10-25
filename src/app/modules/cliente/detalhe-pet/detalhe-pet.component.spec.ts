import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhePetComponent } from './detalhe-pet.component';

describe('DetalhePetComponent', () => {
  let component: DetalhePetComponent;
  let fixture: ComponentFixture<DetalhePetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalhePetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalhePetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
