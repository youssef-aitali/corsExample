import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class UsersService {
  private host: string = "http://localhost:8080";

  constructor(private http: HttpClient) {}

  getAllUsers() {
    return this.http.get(this.host + "/users");
  }
}
