import { Component, OnInit } from '@angular/core';
import {Iitem} from './item';
import {ItemService} from './item.service';


@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.css']
})
export class ItemFormComponent implements OnInit {
  pageTitle: string='Items:';
  _listFilter='';
  

  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter=value;
    this.filteredItems=this.listFilter ? this.performFilter(this.listFilter) : this.items;
  }

  
  filteredItems: Iitem[]=[];
  items: Iitem[]=[];

  constructor(private itemService: ItemService) {
   }
  
   
  performFilter(filterBy: string): Iitem[] {
    filterBy=filterBy.toLocaleLowerCase();
    return this.items.filter((item: Iitem) => item.itemName.toLocaleLowerCase().indexOf(filterBy)!==-1);
  }

  onRatingClicked(message: string): void {
    console.log(message);
    this.pageTitle='Item List: '+message;
  }
  ngOnInit(): void {
    this.items=this.itemService.getItems();
    this.filteredItems=this.items;

  }

}