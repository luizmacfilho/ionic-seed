import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { IonicPage } from 'ionic-angular';
import { AppState } from '@models/state.model';
import { User } from '@models/user.model';
import * as userActions from '@actions/user.actions';

@IonicPage()
@Component({
    selector: 'page-home',
    templateUrl: 'home.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePage {

    public user$: Observable<User>;
    public user: User = {
        firstName: '',
        lastName: ''
    };

    constructor(
        private store: Store<AppState>,
    ) {
        this.user$ = this.store.select('user');
    }

    public setUser() {
        this.store.dispatch(new userActions.SetUser(this.user));
        this.clearUser();
    }

    private clearUser() {
        this.user = { firstName: '', lastName: '' };
    }

}
