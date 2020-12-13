import { Component, OnInit } from '@angular/core';
import {Iitem} from './item'
import { ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'app-item-form',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.css']
})
export class ItemFormComponent implements OnInit {
  pageTitle: string='Item Locations';
  _listFilter: string ;
  

  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter=value;
    this.filteredItems=this.listFilter ? this.performFilter(this.listFilter) : this.items;
  }

  
  filteredItems: Iitem[];
  items: Iitem[]=[
    {
    "itemId": 1,
    "itemName": "Leather Gloves",
    "room": "basement",
    "place": "closet",
    "updateDate": "March 19, 2020",
    "description": "bought at Costco",
    "quantity": 2
  },
  {
    "itemId": 2,
    "itemName": "fiber towels",
    "room": "basement",
    "place": "ledder",
    "updateDate": "March 19, 2020",
    "description": "used",
    "quantity": 3
  },
    {
    "itemId": 3,
    "itemName": "head lamp",
    "room": "garage",
    "place": "board",
    "updateDate": "October 19, 2020",
    "description": "new",
    "quantity": 1
  },
    {
    "itemId": 4,
    "itemName": "head lamp",
    "room": "basement",
    "place": "board",
    "updateDate": "October 19, 2020",
    "description": "new",
    "quantity": 2
  }
  ];

  constructor() {
    this.filteredItems=this.items;
    this.listFilter='glove';
   }
  
   
  performFilter(filterBy: string): Iitem[] {
    filterBy=filterBy.toLocaleLowerCase();
    return this.items.filter((item: Iitem) => item.itemName.toLocaleLowerCase().indexOf(filterBy)!==-1);
  }

  ngOnInit(): void {
    console.log("Oninit is on")
  }

}