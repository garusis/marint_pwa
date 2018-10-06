import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class CoursesProvider {

  constructor(public http: HttpClient) { }

  countAllCourses() {
    let user: User = JSON.parse(window.localStorage.getItem("authUser"));
    let options = {
      headers: {
        'Authorization': user.id
      }
    }

    let where = {"isPublished":true};
    let sqlWhere = "?where="+encodeURIComponent(JSON.stringify(where));
    return this.http.get("https://miapi-dev.herokuapp.com/api/courses/count"+sqlWhere, options);
  }

  countMyCourses() {
    let user: User = JSON.parse(window.localStorage.getItem("authUser"));
    let options = {
      headers: {
        'Authorization': user.id
      }
    }
    return this.http.get("https://miapi-dev.herokuapp.com/api/students/" + user.userId + "/courses/count", options);
  }
}

interface User {
  account_type: string,
  create: string,
  id: string,
  ttl: number,
  userId: string
}