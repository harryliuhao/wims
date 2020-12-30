import { Component, OnInit } from '@angular/core';
import { Iitem } from './item';

@Component({

  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {
  pageTitle: string='Item Detail';
  item: Iitem|undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
