import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BBoxComponent } from './b-box.component';

describe('BBoxComponent', () => {
  let component: BBoxComponent;
  let fixture: ComponentFixture<BBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
