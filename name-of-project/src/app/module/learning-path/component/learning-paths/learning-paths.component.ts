import { Component, OnInit } from '@angular/core';
import { FetcherService } from 'src/app/service/fetcher.service';

@Component({
  selector: 'app-learning-paths',
  templateUrl: './learning-paths.component.html',
  styleUrls: ['./learning-paths.component.scss']
})
export class LearningPathsComponent implements OnInit {

  dataSource: string[] = [];

  displayedColumns: string[] = ['name'];

  constructor(private fetcher: FetcherService) { }

  ngOnInit(): void {
    this.fetcher.fetchTutorials().subscribe(store => {
      this.dataSource = store.learningPaths.map(l => l.name);
    });
  }

}
