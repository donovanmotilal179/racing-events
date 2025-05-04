import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventDetailsMultipleSearchComponent } from './event-details-multiple-search.component';

describe('EventDetailsMultipleSearchComponent', () => {
  let component: EventDetailsMultipleSearchComponent;
  let fixture: ComponentFixture<EventDetailsMultipleSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventDetailsMultipleSearchComponent]
    });
    fixture = TestBed.createComponent(EventDetailsMultipleSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
