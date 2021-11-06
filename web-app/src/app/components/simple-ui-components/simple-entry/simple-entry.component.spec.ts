import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleEntryComponent } from './simple-entry.component';

describe('SimpleEntryComponent', () => {
  let component: SimpleEntryComponent;
  let fixture: ComponentFixture<SimpleEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleEntryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
