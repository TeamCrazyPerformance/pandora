import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import { Login } from '../pages/login/login';
import { Signup } from '../pages/signup/signup';
import { Home } from '../pages/home/home';
import { NewDate } from '../pages/newDate/newDate';


@NgModule({
  declarations: [
    MyApp,
    Page1,
    Page2,
    Login,
    Signup,
    Home,
    NewDate
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Page1,
    Page2,
    Login,
    Signup,
    Home,
    NewDate
  ],
  providers: []
})
export class AppModule {}
