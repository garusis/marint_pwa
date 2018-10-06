import { ProfilePage } from "./../profile/profile";
import { CoursesProvider } from "./../../providers/courses/courses";
import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { AuthProvider } from "../../providers/auth/auth";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  user: User;
  mycourses = 0;
  allcourses = 0;
  userImg = "";

  constructor(
    public navCtrl: NavController,
    public _authProv: AuthProvider,
    public _courseProv: CoursesProvider
  ) {
    this.loadData();
  }

  loadData() {
    this._authProv.loadDataUser().subscribe((data: User) => {
      this.user = data;
      window.localStorage.setItem("user",JSON.stringify(this.user));
      console.log("Usuario: ", this.user);
      this._authProv.loadImageUser(this.user.id).subscribe((urlImg: any) => {
        console.log("Imagen: ", urlImg);
      });
    });

    this._courseProv.countMyCourses().subscribe((data: any) => {
      this.mycourses = data.count;
    });

    this._courseProv.countAllCourses().subscribe((data: any) => {
      this.allcourses = data.count;
    });
  }

  loadProfile() {
    this.navCtrl.push(ProfilePage);
  }
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