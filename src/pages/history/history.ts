import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { IonicPage } from 'ionic-angular';
import { AppState } from '@models/state.model';
import { User } from '@models/user.model';

@IonicPage()
@Component({
    selector: 'page-history',
    templateUrl: 'history.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HistoryPage {

    public user$: Observable<User>;

    constructor(
        private store: Store<AppState>
    ) {
        this.user$ = this.store.select('user');
    }

}
