import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TutorialPart } from 'src/app/model/tutorial-part.model';
import { Tutorial } from 'src/app/model/tutorial.model';
import { FetcherService } from 'src/app/service/fetcher.service';

@Component({
  selector: 'app-tutorial-part',
  templateUrl: './tutorial-part.component.html',
  styleUrls: ['./tutorial-part.component.scss']
})
export class TutorialPartComponent implements OnInit {

  currentPartMarkdownPath: string = '';

  readonly markdownFolder: string = 'assets/markdown/';

  ready: boolean = false;

  tutorial: Tutorial;
  partIndex: number;

  constructor(private route: ActivatedRoute, private fetcher: FetcherService) { }

  ngOnInit(): void {
    this.getParamValues();
  }

  getParamValues(): void {
    this.route.params.subscribe(params => {
      console.log(params);

      const id: string = params['id'];
      this.partIndex = parseInt(params['part']);

      this.fetcher.fetchTutorial(id).subscribe((tutorial: Tutorial) => {
        this.tutorial = tutorial;
        this.currentPartMarkdownPath = this.markdownFolder + tutorial?.markdownFolder + "/" + tutorial.parts[this.partIndex].path;
        this.ready = true;
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
