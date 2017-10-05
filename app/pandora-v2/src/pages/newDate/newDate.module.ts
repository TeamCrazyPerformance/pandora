import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { NewDatePage } from './newDate';

@NgModule({
  declarations: [
    NewDatePage,
  ],
  imports: [
    IonicPageModule.forChild(NewDatePage),
    TranslateModule.forChild()
  ],
  exports: [
    NewDatePage
  ]
})
export class NewDatePageModule { }
