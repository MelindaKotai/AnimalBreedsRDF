import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCatsComponent } from './show-cats.component';

describe('ShowCatsComponent', () => {
  let component: ShowCatsComponent;
  let fixture: ComponentFixture<ShowCatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowCatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowCatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
