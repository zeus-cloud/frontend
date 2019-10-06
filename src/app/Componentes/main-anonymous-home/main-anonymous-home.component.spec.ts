import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainAnonymousHomeComponent } from './main-anonymous-home.component';

describe('MainAnonymousHomeComponent', () => {
  let component: MainAnonymousHomeComponent;
  let fixture: ComponentFixture<MainAnonymousHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainAnonymousHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainAnonymousHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
