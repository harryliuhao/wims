import {Injectable} from '@angular/core';
import {Iitem} from "./item";

@Injectable({
  providedIn: 'root'
})
export class ItemService{
    getItems(): Iitem[]{
        return [
            {
                "itemId": 1,
                "itemName": "Leather Gloves",
                "room": "basement",
                "place": "closet",
                "updateDate": "March 19, 2020",
                "description": "bought at Costco",
                "quantity": 2,
                "starRating": 3
              },
              {
                "itemId": 2,
                "itemName": "fiber towels",
                "room": "basement",
                "place": "ledder",
                "updateDate": "March 19, 2020",
                "description": "used",
                "quantity": 3,
                "starRating": 4
              },
                {
                "itemId": 3,
                "itemName": "head lamp",
                "room": "garage",
                "place": "board",
                "updateDate": "October 19, 2020",
                "description": "new",
                "quantity": 1,
                "starRating": 5
              },
                {
                "itemId": 4,
                "itemName": "head lamp",
                "room": "basement",
                "place": "board",
                "updateDate": "October 19, 2020",
                "description": "new",
                "quantity": 2,
                "starRating": 2
              },
              {
                "itemId": 5,
                "itemName": "power drill",
                "room": "basement",
                "place": "workbench",
                "updateDate": "December 19, 2020",
                "description": "DeWalt",
                "quantity": 1,
                "starRating": 2
              }
        ];
    }
}