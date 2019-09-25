import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcusrsionsComponent } from './excusrsions.component';

describe('ExcusrsionsComponent', () => {
  let component: ExcusrsionsComponent;
  let fixture: ComponentFixture<ExcusrsionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExcusrsionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExcusrsionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
