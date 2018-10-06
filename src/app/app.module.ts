import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule } from "@angular/core";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";
import { SplashScreen } from "@ionic-native/splash-screen";
import { StatusBar } from "@ionic-native/status-bar";
import { HttpClientModule } from "@angular/common/http";
import { IonicStorageModule } from "@ionic/storage";

//Pages
import { MyApp } from "./app.component";
import { HomePage } from "../pages/home/home";
import { LoginPage } from "./../pages/login/login";
import { ProfilePage } from "./../pages/profile/profile";

//Providers
import { CoursesProvider } from "../providers/courses/courses";
import { AuthProvider } from "../providers/auth/auth";
import { UtilsProvider } from "../providers/utils/utils";

@NgModule({
  declarations: [MyApp, LoginPage, HomePage, ProfilePage],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [MyApp, LoginPage, HomePage, ProfilePage],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    CoursesProvider,
    AuthProvider,
    UtilsProvider
  ]
})
export class AppModule {}
