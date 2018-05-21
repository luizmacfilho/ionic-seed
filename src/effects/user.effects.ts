import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/delay';

import * as userActions from '@actions/user.actions';

export type Action = userActions.All;

@Injectable()
export class UserEffects {

    constructor(private actions: Actions) { }

    @Effect() setUser: Observable<Action> = this.actions
        .ofType(userActions.SET_USER)
        .map((action: userActions.SetUser) => action.payload)
        .map(user => {
            return new userActions.SetUserSuccess(user);
        })
        .catch(err => of(new userActions.SetUserFail({ error: err.message })));

    @Effect() addUserToHistory: Observable<Action> = this.actions
        .ofType(userActions.SET_USER_SUCCESS)
        .map((action: userActions.SetUserSuccess) => action.payload)
        .map((user) => {
            return new userActions.AddUserToHistory(
                { firstName: user.firstName, lastName: user.lastName}
            );
        });
}