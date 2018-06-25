import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TranslateService } from '@ngx-translate/core';

@Component({
    templateUrl: 'app.html'
})
export class MyApp {

    @ViewChild(Nav) nav: Nav;

    public rootPage: any = 'HomePage';
    public pages: Array<{title: string, component: any}>;
    private defaultLang: string = 'en-US';
    private langs: string[] = [
        'en-US', 'pt-BR'
    ];

    constructor(
        public platform: Platform, 
        public statusBar: StatusBar, 
        public splashScreen: SplashScreen,
        public translate: TranslateService,
    ) {
        this.initializeApp();
        this.languageConfig();

        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'HOME', component: 'HomePage' },
            { title: 'HISTORY', component: 'HistoryPage' },
        ];

    }

    private initializeApp() {
        this.platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }

    public openPage(page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    }

    private languageConfig() {
        let browserLang = this.translate.getBrowserCultureLang();
        this.translate.addLangs(this.langs);
        this.translate.setDefaultLang(this.defaultLang);
        this.translate.use(browserLang);
    }

}
