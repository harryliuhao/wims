import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import { Iitem } from './item';

@Component({

  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {
  pageTitle: string='Item Detail';
  item: Iitem|undefined;

  constructor(private route: ActivatedRoute,
              private router: Router) { 
                console.log(this.route.snapshot.paramMap.get('id'));
              }

  ngOnInit(): void{
    let id=this.route.snapshot.paramMap.get('id');
    this.pageTitle+=':> '+id;
    this.item={
      "itemId": 3,
      "itemName": "head lamp",
      "room": "garage",
      "place": "board",
      "updateDate": "October 19, 2020",
      "description": "new",
      "quantity": 1,
      "starRating": 5
    }
  }

  onBack(): void{
    this.router.navigate(['/items']);
  }

}
