import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Storage } from "@ionic/storage";

@Injectable()
export class AuthProvider {
  constructor(public http: HttpClient) {}

  login(username, password) {
    let data = {
      username: username,
      password: password
    };

    let options = {
      headers: {
        "Content-Type": "application/json"
      }
    };

    return this.http.post(
      "https://miapi-dev.herokuapp.com/api/students/login",
      data,
      options
    );
  }

  loadDataUser() {
    let user: User = JSON.parse(window.localStorage.getItem("authUser"));

    let options = {
      headers: {
        Authorization: user.id
      }
    };

    return this.http.get(
      "https://miapi-dev.herokuapp.com/api/students/" + user.userId,
      options
    );
  }

  loadImageUser(id) {
    let options = {
      headers: {
        Accept: "application/json, text/plain, */*",
        Origin: "https://marlininternacional.com",
        Authorization: id
      }
    };
    return this.http.get(
      "https://mibackend.herokuapp.com/api/students/" + id + "/image",
      options
    );
  }
}

interface User {
  account_type: string;
  create: string;
  id: string;
  ttl: number;
  userId: string;
}
