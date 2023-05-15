import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { TutorialStore } from '../model/tutorial-store.model';
import { Tutorial } from '../model/tutorial.model';

@Injectable({
  providedIn: 'root'
})
export class FetcherService {

  constructor(private httpClient: HttpClient) { }

  fetchTutorials(): Observable<TutorialStore> {
    return this.httpClient.get<TutorialStore>('assets/tutorials.json');
  }

  fetchTutorial(id: string): Observable<Tutorial> {
    return this.fetchTutorials().pipe(
      map(tutorials => {
        return tutorials.tutorials.find(tutorial => tutorial.markdownFolder === id)
      }));
  }

}
