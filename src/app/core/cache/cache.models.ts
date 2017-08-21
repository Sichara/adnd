import { Observable } from 'rxjs/Observable';

export interface CachedObservables {
    [key: string]: Observable<any>;
}
