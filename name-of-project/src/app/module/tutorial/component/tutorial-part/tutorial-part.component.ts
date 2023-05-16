import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TutorialPartContent } from 'src/app/model/tutorial-part-content.model';
import { TutorialPart } from 'src/app/model/tutorial-part.model';
import { Tutorial } from 'src/app/model/tutorial.model';
import { FetcherService } from 'src/app/service/fetcher.service';
import { ExpectedDurationForTutorialPart } from 'src/app/utils/tutorial.utils';

@Component({
  selector: 'app-tutorial-part',
  templateUrl: './tutorial-part.component.html',
  styleUrls: ['./tutorial-part.component.scss']
})
export class TutorialPartComponent implements OnInit {

  currentPartMarkdownPath: string = '';

  readonly markdownFolder: string = 'assets/markdown/';

  ready: boolean = false;

  expectedDuration: number;

  tutorial: Tutorial;
  partIndex: number;

  constructor(private route: ActivatedRoute, private fetcher: FetcherService) { }

  ngOnInit(): void {
    this.getParamValues();
  }

  getParamValues(): void {
    this.route.params.subscribe(params => {
      console.log('params ', params);

      const id: string = params['id'];
      this.partIndex = parseInt(params['part']);

      this.fetcher.fetchTutorials().subscribe((tutorialStore) => {
        console.log('fetch tutorials ', tutorialStore);
      });

      this.fetcher.fetchTutorial(id).subscribe((tutorial: Tutorial) => {

        console.log('fetch tutorial ', tutorial);

        this.tutorial = tutorial;
        this.currentPartMarkdownPath = this.markdownFolder + tutorial?.markdownFolder + "/" + tutorial.parts[this.partIndex].path;

        this.fetcher.getTutorialPartContent(tutorial, tutorial.parts[this.partIndex]).subscribe((content: TutorialPartContent) => {

          console.log('fetch tutorial part content ', content);

          this.expectedDuration = ExpectedDurationForTutorialPart(content);
          this.ready = true;
          console.log(this.currentPartMarkdownPath);
        });
      });

    });
  }
  hasNextPart(): boolean {
    return this.partIndex < this.tutorial.parts.length - 1;
  }

  hasPreviousPart(): boolean {
    return this.partIndex > 0;
  }

  nextPart(): TutorialPart {
    return this.tutorial.parts[this.partIndex + 1];
  }

  previousPart(): TutorialPart {
    return this.tutorial.parts[this.partIndex - 1];
  }

  nextIndex(): number {
    return this.partIndex + 1;
  }

  previousIndex(): number {
    return this.partIndex - 1;
  }


}
