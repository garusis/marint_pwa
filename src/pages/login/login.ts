import { UtilsProvider } from './../../providers/utils/utils';
import { HomePage } from './../home/home';
import { AuthProvider } from './../../providers/auth/auth';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user = {
    username: "",
    password: ""
  }

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public _authProv: AuthProvider, public _utilProv: UtilsProvider) {
  }

  login() {
    this._authProv.login(this.user.username, this.user.password).subscribe(data => {
      window.localStorage.setItem("authUser", JSON.stringify(data));
      this.navCtrl.setRoot(HomePage);
    }, error => {
      this._utilProv.alerta('Error', 'El usuario y la contraseña son incorrectos, intentelo nuevamente.');
    });
  }
}
