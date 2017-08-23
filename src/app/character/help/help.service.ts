import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { StHttpService } from '../../core/index';

@Injectable()
export class HelpService {

  constructor(private http: StHttpService) {
  }

  getContents(chapter: string): Observable<string> {
    return this.http.get(`api/info?name=${chapter}`)
      .map((data: any[]) => data[0].content)
  }
}
