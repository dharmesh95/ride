import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { QUICK_FILL_DESTINATION } from 'src/app/constants/constants';

@Component({
  selector: "app-quick-fill-location",
  templateUrl: "./quick-fill-location.component.html",
  styleUrls: ["./quick-fill-location.component.css"]
})
export class QuickFillLocationComponent implements OnInit {
  @Output() fillDestination = new EventEmitter<any>();

  constructor() { }

  ngOnInit() { }

  quickFillLocation() {
    this.fillDestination.emit(QUICK_FILL_DESTINATION);
  }
}
