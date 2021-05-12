import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseServiceComponent } from './browse-service.component';

describe('BrowseServiceComponent', () => {
  let component: BrowseServiceComponent;
  let fixture: ComponentFixture<BrowseServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrowseServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowseServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
