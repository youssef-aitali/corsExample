import { Component, OnInit } from "@angular/core";
import { UsersService } from "src/service/users.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "webClient";

  users: any;

  constructor(public usersService: UsersService) {}

  ngOnInit() {
    this.usersService.getAllUsers().subscribe(
      data => {
        this.users = data;
      },
      err => {
        console.log("Unable to load users");
      }
    );
  }
}
