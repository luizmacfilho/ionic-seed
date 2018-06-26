import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

export class TranslateServiceMock {

  public static instance(): any {
    let _dismissCallback: Function;
    let _browserCultureLang: string = 'en-US';
    let instance = jasmine.createSpyObj('Translate', [
      'getBrowserCultureLang',
      'addLangs',
      'setDefaultLang',
      'use'
    ]);

    instance.getBrowserCultureLang.and.returnValue(_browserCultureLang);
    instance.use.and.callFake(lang => {
      return Observable.of(lang);
    });

    return instance;
  }
}