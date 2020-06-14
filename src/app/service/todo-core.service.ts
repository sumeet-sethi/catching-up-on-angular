import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';

import { Todo } from '../interface/todo';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class TodoCoreService {

  private todoCoreUrl: string;

  constructor(private httpClient: HttpClient) {
    this.todoCoreUrl = 'http://localhost:8080/todos';
  }

  getAllTodos(): Observable<Todo[]> {
    return this.httpClient.get<Todo[]>(this.todoCoreUrl);
  }

}
