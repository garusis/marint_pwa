import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlertController } from 'ionic-angular';

@Injectable()
export class UtilsProvider {

  constructor(public http: HttpClient, public alertCtrl: AlertController) {
    console.log('Hello UtilsProvider Provider');
  }

  alerta(type, message) {
    this.alertCtrl.create({
      title: type,
      subTitle: message,
      buttons: ['OK']
    }).present();
  }
}
