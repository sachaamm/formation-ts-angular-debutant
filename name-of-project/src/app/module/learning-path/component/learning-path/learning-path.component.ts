import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FetcherService } from 'src/app/service/fetcher.service';

@Component({
  selector: 'app-learning-path',
  templateUrl: './learning-path.component.html',
  styleUrls: ['./learning-path.component.scss']
})
export class LearningPathComponent implements OnInit {

  @ViewChild('dataToExport', { static: false }) public dataToExport: ElementRef;

  markdowns: { tutorial: string, partIndex: number, markdownPath: string, markdownContent: string }[] = [];

  // ready: boolean = false;

  constructor(private route: ActivatedRoute, private fetcher: FetcherService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {

      this.fetcher.fetchTutorials().subscribe(store => {

        const learningPath = store.learningPaths.find(l => l.name === params['id']);

        learningPath.tutorials.forEach(tutorialId => {
          this.fetcher.fetchTutorial(tutorialId).subscribe(tutorial => {

            tutorial.parts.forEach(part => {
              this.fetcher.getTutorialPartContent(tutorial, part).subscribe(content => {
                console.log('content ', content);
                this.markdowns.push({
                  tutorial: content.tutorialName,
                  partIndex: 0,
                  markdownPath: 'assets/markdown/' + tutorial.markdownFolder + '/' + part.path,
                  markdownContent: content.content
                });

                // this.ready = true;

              });
            });
          });
        });

      });

    });
  }

}
