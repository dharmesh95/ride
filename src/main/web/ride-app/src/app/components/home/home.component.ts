import { Component, OnInit, QueryList, ViewChildren } from "@angular/core";
import { AppService } from "src/app/app.service";
import { AutoComplete } from "src/app/model/AutoComplete";
import { AutoCompleteComponent } from "../auto-complete/auto-complete.component";
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  sourceSuggestions: string[];
  destinationSuggestions: string[];

  @ViewChildren(AutoCompleteComponent)
  autoCompleteComponents: QueryList<AutoCompleteComponent>;
  autoCompleteArray = [];
  srcLat: string;
  srcLong: string;
  noOfSeats: number = 1;

  constructor(private appService: AppService) { }

  ngOnInit() {
    navigator.geolocation.getCurrentPosition(this.setSourcePosition);
    setTimeout(() => {
      this.srcLat = document.getElementById("latitude").innerHTML;
      this.srcLong = document.getElementById("longitude").innerHTML;
      this.getSource();
    }, 500);
  }

  setSourcePosition(position) {
    document.getElementById("latitude").innerHTML = position.coords.latitude;
    document.getElementById("longitude").innerHTML = position.coords.longitude;
  }

  getSource() {
    if (this.srcLat) {
      this.appService
        .getSource(this.srcLat, this.srcLong)
        .subscribe(data => {
          this.fillSource(data.features[0].place_name);
        });
    }
  }

  ngAfterViewInit() {
    this.autoCompleteArray = this.autoCompleteComponents.toArray();
  }

  getSuggestions(autoComplete: AutoComplete) {
    if (autoComplete.searchString) {
      this.appService
        .getSuggestions(autoComplete.searchString)
        .subscribe(data => {
          let suggestions = data.features.map(feature => feature.place_name);
          if (autoComplete.srcOrDes === "Source")
            this.sourceSuggestions = suggestions;
          else if (autoComplete.srcOrDes === "Destination")
            this.destinationSuggestions = suggestions;
        });
    }
  }

  fillDestination(destination: string) {
    this.autoCompleteArray[1].updateSearchString(destination);
  }

  fillSource(source: string) {
    this.autoCompleteArray[0].updateSearchString(source);
  }

  needRide() {
    this.appService.needRide(this.srcLat, this.srcLong, this.noOfSeats).subscribe(data=>{
      console.log("done");
    });
  }
}
