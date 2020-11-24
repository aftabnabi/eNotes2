import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular";
  isclicked: boolean = false;

  public constructor() {}

  menu(): void {
    this.isclicked = !this.isclicked;
  }
}
