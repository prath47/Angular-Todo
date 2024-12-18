import { TestBed } from '@angular/core/testing';

import { FetchTodoService } from './fetch-todo.service';

describe('FetchTodoService', () => {
  let service: FetchTodoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchTodoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
