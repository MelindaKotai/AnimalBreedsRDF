import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowParrotsComponent } from './show-parrots.component';

describe('ShowParrotsComponent', () => {
  let component: ShowParrotsComponent;
  let fixture: ComponentFixture<ShowParrotsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowParrotsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowParrotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
