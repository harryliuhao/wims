import { TestBed } from '@angular/core/testing';

import { ItemDetailGuard } from './item-detail.guard';

describe('ItemDetailGuard', () => {
  let guard: ItemDetailGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ItemDetailGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
