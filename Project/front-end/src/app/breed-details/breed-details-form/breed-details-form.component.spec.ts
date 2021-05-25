import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreedDetailsFormComponent } from './breed-details-form.component';

describe('BreedDetailsFormComponent', () => {
  let component: BreedDetailsFormComponent;
  let fixture: ComponentFixture<BreedDetailsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreedDetailsFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BreedDetailsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
