import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular";
  obj: HTMLElement;
  public constructor() {}

  menu(): void {
    this.obj = document.getElementById("nav") as HTMLElement;

    if (obj.style.display == "none") {
      obj.style.display = block;
    } else {
      obj.style.display = none;
    }
  }
}
