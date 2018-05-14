import { AppState } from '@models/state.model';

export function getInitialState() {
    let initialState: AppState = {
        config: {
            version: '0.0.1',
        }
    };

    return initialState;
}