import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.scss']
})
export class PropertyCardComponent implements OnInit {

  constructor() { }

  property: Property = {
    Id: 1,
    Name: 'ala',
    Type: PropertyType.House,
    Price: 12000,
  }
  ngOnInit() {
  }

}

//Types
type Property = {
  Id: number;
  Name: string;
  Type: PropertyType;
  Price: 12000;
}

//enums
enum PropertyType {
  House= "House",

}