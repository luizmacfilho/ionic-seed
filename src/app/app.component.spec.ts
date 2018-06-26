import { TranslateService } from '@ngx-translate/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PlatformMock, SplashScreenMock, StatusBarMock } from 'ionic-mocks';
import { MyApp } from './app.component';
import { TranslateServiceMock } from '../../test-config/mocks-ionic';

describe('MyApp Component', () => {
  let component;

  beforeEach(() => {
    let translateService: TranslateService = TranslateServiceMock.instance();
    let statusBar: StatusBar = StatusBarMock.instance();
    let splashScreen: SplashScreen = SplashScreenMock.instance();
    let platform: Platform = PlatformMock.instance();

    component = new MyApp(platform, statusBar, splashScreen, translateService);

  });

  it('should be created', () => {
    expect(component instanceof MyApp).toBeTruthy();
  });

  it('should have two pages', () => {
    expect(component.pages.length).toBe(2);
  });

});