import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnployeeComponent } from './enployee.component';

describe('EnployeeComponent', () => {
  let component: EnployeeComponent;
  let fixture: ComponentFixture<EnployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnployeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
