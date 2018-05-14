import { Store } from '@ngrx/store';
import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { AppState } from '@models/state.model';
import * as userActions from '@actions/user.actions';

@IonicPage()
@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    constructor(
        private navCtrl: NavController,
        private store: Store<AppState>,
    ) {
        this.store.dispatch(new userActions.SetUser({ id: 1, name: 'Luiz'}));
    }

}
