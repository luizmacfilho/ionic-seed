import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule, INITIAL_STATE } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { getInitialState } from '@app/app.state';

import { MyApp } from '@app/app.component';
import { Environment } from '@env';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { UserEffects } from '@effects/user.effects';
import { userReducer } from '@reducers/user.reducer';

@NgModule({
    declarations: [
        MyApp,
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp),
        EffectsModule.forRoot([UserEffects]),
        StoreModule.forRoot({
            user: userReducer
        }),
        Environment.mode !== 'Production'
            ? StoreDevtoolsModule.instrument({ maxAge: 25 })
            : [],
    ],
    bootstrap: [ IonicApp ],
    entryComponents: [
        MyApp,
    ],
    providers: [
        StatusBar,
        SplashScreen,
        { provide: ErrorHandler, useClass: IonicErrorHandler },
        { provide: INITIAL_STATE, useFactory: getInitialState },
    ]
})
export class AppModule {}
