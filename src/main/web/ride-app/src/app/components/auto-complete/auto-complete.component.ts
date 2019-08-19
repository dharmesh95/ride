import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { AutoComplete } from "src/app/model/AutoComplete";

@Component({
  selector: "app-auto-complete",
  templateUrl: "./auto-complete.component.html",
  styleUrls: ["./auto-complete.component.css"]
})
export class AutoCompleteComponent implements OnInit {
  searchString: string;

  @Input() placeholder: string;
  @Input() suggestions: string[];
  @Output() getSuggestions = new EventEmitter<object>();

  constructor() {}

  ngOnInit() {}

  emitGetSuggestions(event: KeyboardEvent) {
    let autoComplete = new AutoComplete(
      (<HTMLInputElement>event.target).value,
      this.placeholder
    );
    this.getSuggestions.emit(autoComplete);
  }

  updateSearchString(searchString: string) {
    this.searchString = searchString;
  }
}
