import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component } from '@angular/core';
import { TutorialStore } from 'src/app/model/tutorial-store.model';
import { Tutorial } from 'src/app/model/tutorial.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {

  tutorials: Tutorial[] = [];

  test: string = 'test';

  constructor(private httpClient: HttpClient) { }

  ngAfterViewInit(): void {
    this.httpClient.get('assets/tutorials.json').subscribe((data: TutorialStore) => {
      this.tutorials = data.tutorials;
    });
  }
}
