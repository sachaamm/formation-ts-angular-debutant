import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-exemple-routing-param',
  templateUrl: './exemple-routing-param.component.html',
  styleUrls: ['./exemple-routing-param.component.scss']
})
export class ExempleRoutingParamComponent {
  parametreRoute: string

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.parametreRoute = params['id'];
    });
  }
}

