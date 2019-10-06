import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainUserHomeComponent } from './main-user-home.component';

describe('MainUserHomeComponent', () => {
  let component: MainUserHomeComponent;
  let fixture: ComponentFixture<MainUserHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainUserHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainUserHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
