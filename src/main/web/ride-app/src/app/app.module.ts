import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatMenuModule } from "@angular/material/menu";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AutoCompleteComponent } from "./components/auto-complete/auto-complete.component";
import { HeaderComponent } from "./components/header/header.component";
import { HomeComponent } from "./components/home/home.component";
import { QuickFillLocationComponent } from "./components/quick-fill-location/quick-fill-location.component";


const materialModules = [
  MatFormFieldModule,
  MatAutocompleteModule,
  MatInputModule,
  MatMenuModule,
  MatButtonModule
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    AutoCompleteComponent,
    QuickFillLocationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ...materialModules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
