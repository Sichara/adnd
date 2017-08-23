import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Event, NavigationEnd, Params, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { HelpService } from './help.service';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HelpComponent implements OnInit {
  content: Observable<string>;

  constructor(private route: ActivatedRoute,
              private service: HelpService) {
  }

  ngOnInit() {
    this.content = this.route.params
      .switchMap((params: Params) => {
        return this.service.getContents(params['id']);
      });
  }
}
