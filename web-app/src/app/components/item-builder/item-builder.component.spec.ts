import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemBuilderComponent } from './item-builder.component';

describe('ItemBuilderComponent', () => {
  let component: ItemBuilderComponent;
  let fixture: ComponentFixture<ItemBuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemBuilderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
