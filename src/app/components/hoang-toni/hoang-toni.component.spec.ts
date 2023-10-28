import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoangToniComponent } from './hoang-toni.component';

describe('HoangToniComponent', () => {
  let component: HoangToniComponent;
  let fixture: ComponentFixture<HoangToniComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HoangToniComponent]
    });
    fixture = TestBed.createComponent(HoangToniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
