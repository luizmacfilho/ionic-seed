import { Action } from '@ngrx/store';
import { User } from '@models/user.model';

export const GET_USER = '[USER] Get';
export const GET_USER_SUCCESS = '[USER] Get success';
export const SET_USER = '[USER] Set';
export const SET_USER_SUCCESS = '[USER] Set success';
export const SET_USER_FAIL = '[USER] Set fail';
export const ADD_USER_TO_HISTORY = '[USER] Add to history';

export class GetUser implements Action {
    readonly type = GET_USER;
    constructor(public payload: any) { }
}

export class GetUserSuccess implements Action {
    readonly type = GET_USER_SUCCESS;
    constructor(public payload: User) { }
}

export class SetUser implements Action {
    readonly type = SET_USER;
    constructor(public payload: User) { }
}

export class SetUserSuccess implements Action {
    readonly type = SET_USER_SUCCESS;
    constructor(public payload?: User) { }
}

export class SetUserFail implements Action {
    readonly type = SET_USER_FAIL;
    constructor(public payload?: any) { }
}

export class AddUserToHistory implements Action {
    readonly type = ADD_USER_TO_HISTORY;
    constructor(public payload: User) {}
}

export type All
    = GetUser
    | GetUserSuccess
    | SetUser
    | SetUserSuccess
    | SetUserFail
    | AddUserToHistory;