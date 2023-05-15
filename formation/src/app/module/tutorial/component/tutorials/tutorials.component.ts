import { AfterViewInit, Component, OnInit } from '@angular/core';
import { TutorialStore } from 'src/app/model/tutorial-store.model';
import { Tutorial } from 'src/app/model/tutorial.model';
import { FetcherService } from 'src/app/service/fetcher.service';

@Component({
  selector: 'app-tutorials',
  templateUrl: './tutorials.component.html',
  styleUrls: ['./tutorials.component.scss']
})
export class TutorialsComponent implements AfterViewInit {

  tutorials: TutorialStore;

  dataSource: Tutorial[] = [];

  displayedColumns: string[] = ['name'];

  constructor(private fetcher: FetcherService) { }

  ngAfterViewInit(): void {
    this.fetcher.fetchTutorials().subscribe(tutorials => {
      this.tutorials = tutorials;
      this.dataSource = tutorials.tutorials;
    });
  }

}
