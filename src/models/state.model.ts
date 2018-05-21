import { Config } from '@models/config.model';
import { User } from '@models/user.model';

export interface AppState {
    user?: User;
    config: Config;
    history?: User[];
}