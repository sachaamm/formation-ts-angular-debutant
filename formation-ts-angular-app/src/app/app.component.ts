import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  constructor(private httpClient: HttpClient) { }

  ngAfterViewInit(): void {
    // throw new Error('Method not implemented.');
  }

}
