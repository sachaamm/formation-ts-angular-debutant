import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { TutorialStore } from '../model/tutorial-store.model';
import { Tutorial } from '../model/tutorial.model';
import { TutorialPartContent } from '../model/tutorial-part-content.model';
import { TutorialPart } from '../model/tutorial-part.model';

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
        console.log('tutorials ', tutorials);
        return tutorials.tutorials.find(tutorial => tutorial.markdownFolder === id)
      }));
  }

  getTutorialPartContent(tutorial: Tutorial, part: TutorialPart): Observable<TutorialPartContent> {
    return this.httpClient.get<string>('assets/markdown/' + tutorial.markdownFolder + '/' + part.path, { responseType: 'text' as 'json' }).pipe(
      map(content => {
        return {
          content: content,
          tutorialName: tutorial.name,
          tutorialPartName: part.name
        };
      })
    );
  }

  getTutorialPartContentForPart(part: TutorialPart) {

  }

}
