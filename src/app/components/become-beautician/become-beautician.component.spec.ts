import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BecomeBeauticianComponent } from './become-beautician.component';

describe('BecomeBeauticianComponent', () => {
  let component: BecomeBeauticianComponent;
  let fixture: ComponentFixture<BecomeBeauticianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BecomeBeauticianComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BecomeBeauticianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
