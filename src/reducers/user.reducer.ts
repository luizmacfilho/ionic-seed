import * as UserActions from '@actions/user.actions';
import { User } from '@models/user.model';

export type Action = UserActions.All;

export function userReducer(state: User, action: Action) {

    switch (action.type) {

        case UserActions.GET_USER:
            return { ...state, loading: true };

        case UserActions.GET_USER_SUCCESS:
            return { ...state, ...action.payload, loading: false };

        case UserActions.SET_USER:
            return { ...state, ...action.payload, loading: true };

        case UserActions.SET_USER_SUCCESS:
            return { ...state, loading: false };

        default:
            return state;

    }
}