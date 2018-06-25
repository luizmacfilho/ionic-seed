import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TranslateModule } from '@ngx-translate/core';
import { HistoryPage } from './history';

@NgModule({
    declarations: [HistoryPage],
    imports: [
        IonicPageModule.forChild(HistoryPage),
        TranslateModule.forChild(),
    ],
    exports: [HistoryPage],
})
export class HistoryPageModule { }
