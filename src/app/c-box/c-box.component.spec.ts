import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CBoxComponent } from './c-box.component';

describe('CBoxComponent', () => {
  let component: CBoxComponent;
  let fixture: ComponentFixture<CBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
