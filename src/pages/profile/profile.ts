import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";

@IonicPage()
@Component({
  selector: "page-profile",
  templateUrl: "profile.html"
})
export class ProfilePage {
  user: User;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.user = JSON.parse(window.localStorage.getItem("user"));
    console.log(this.user);
  }

  changePicture() {}
}

interface User {
  id: number;
  username: string;
  email: string;
  gender_id: number;
  name: string;
  surname: string;
  lastAccess: string;
  createdAt: string;
  updatedAt: string;
  description: string;
  firstPasswrod: boolean;
  dni?: string;
  address?: string;
  cellphone?: string;
  emailVerified?: string;
  realm?: string;
  socialNetworks?: {};
}
