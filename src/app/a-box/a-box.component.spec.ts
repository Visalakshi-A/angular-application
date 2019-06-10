import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ABoxComponent } from './a-box.component';

describe('ABoxComponent', () => {
  let component: ABoxComponent;
  let fixture: ComponentFixture<ABoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ABoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ABoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
