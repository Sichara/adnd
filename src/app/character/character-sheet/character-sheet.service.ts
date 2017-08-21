import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { StHttpService } from '../../core/index';

@Injectable()
export class CharacterSheetService {

  constructor(private http: StHttpService) {
  }

  getContents(chapter?: string): Observable<any> {
    return this.http.get('api/character');
  }
}
