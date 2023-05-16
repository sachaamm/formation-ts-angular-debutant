import { AfterViewInit, Component } from '@angular/core';
import { TutorialStore } from 'src/app/model/tutorial-store.model';
import { Tutorial } from 'src/app/model/tutorial.model';
import { FetcherService } from 'src/app/service/fetcher.service';
import { MatTableDataSource } from '@angular/material/table';
import { TutorialRow } from 'src/app/model/tutorial-row.model';
import { EXPECTED_READING_PER_CHARACTER } from 'src/app/constants/constants';
import { ExpectedDurationForTutorialPart } from 'src/app/utils/tutorial.utils';

@Component({
  selector: 'app-tutorials',
  templateUrl: './tutorials.component.html',
  styleUrls: ['./tutorials.component.scss']
})
export class TutorialsComponent implements AfterViewInit {

  tutorials: TutorialStore;

  dataSource = new MatTableDataSource<TutorialRow>();

  displayedColumns: string[] = ['name', 'expectedDuration'];

  constructor(private fetcher: FetcherService) { }

  ngAfterViewInit(): void {
    this.fetcher.fetchTutorials().subscribe(tutorials => {
      this.tutorials = tutorials;

      this.dataSource.data = [];

      const rows = [];

      const expectedReadingTimePerCharacterInSeconds = 1;

      this.tutorials.tutorials.forEach(tutorial => {

        const tutorialRow: TutorialRow = {
          name: tutorial.name,
          expectedDuration: 0,
          markdownFolder: tutorial.markdownFolder
        };

        rows.push(tutorialRow);

        tutorial.parts.forEach(part => {
          this.fetcher.getTutorialPartContent(tutorial, part).subscribe(content => {
            const expectedDuration = ExpectedDurationForTutorialPart(content);
            this.updateTutorialExpectedDuration(content.tutorialName, expectedDuration / 60 / 24);
          });
        });
      });

      this.dataSource.data = rows;

    });
  }

  updateTutorialExpectedDuration(tutorialName: string, partExpectedDuration: number): void {
    const rows = this.dataSource.data;
    rows.find(tutorialRow => tutorialRow.name === tutorialName).expectedDuration += partExpectedDuration;
    this.dataSource.data = rows;
  }

}
