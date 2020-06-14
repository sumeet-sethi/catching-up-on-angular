import { TestBed } from '@angular/core/testing';

import { TodoCoreService } from './todo-core.service';

describe('TodoCoreService', () => {
  let service: TodoCoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoCoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
