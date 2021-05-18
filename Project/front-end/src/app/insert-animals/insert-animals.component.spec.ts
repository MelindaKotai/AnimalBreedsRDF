import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertAnimalsComponent } from './insert-animals.component';

describe('InsertAnimalsComponent', () => {
  let component: InsertAnimalsComponent;
  let fixture: ComponentFixture<InsertAnimalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertAnimalsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertAnimalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
