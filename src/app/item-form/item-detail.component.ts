import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import { Iitem } from './item';
import {ItemService} from './item.service';

@Component({

  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {
  pageTitle: string='Item Detail';
  errorMessage = '';
  item: Iitem|undefined;


  constructor(private route: ActivatedRoute,
              private router: Router,
              private itemService: ItemService) { 
                console.log(this.route.snapshot.paramMap.get('id'));
              }

  ngOnInit(): void{
    const param = this.route.snapshot.paramMap.get('id');
    if (param) {
      const id = +param;
      this.getItem(id);
    }
  }

  getItem(id: number): void {
    this.itemService.getItem(id).subscribe({
      next: item => this.item = item,
      error: err => this.errorMessage = err
    });
  }
  onBack(): void{
    this.router.navigate(['/items']);
  }

}
