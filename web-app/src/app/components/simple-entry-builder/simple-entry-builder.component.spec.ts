import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleEntryBuilderComponent } from './simple-entry-builder.component';

describe('SimpleEntryBuilderComponent', () => {
  let component: SimpleEntryBuilderComponent;
  let fixture: ComponentFixture<SimpleEntryBuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleEntryBuilderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleEntryBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
