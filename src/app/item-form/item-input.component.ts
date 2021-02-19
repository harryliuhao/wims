import { Component, OnInit } from '@angular/core';
import {ItemService} from './item.service';
import {UserSettings} from '../data/user-settings';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-item-input',
  templateUrl: './item-input.component.html',
  styleUrls: ['./item-input.component.css']
})
export class ItemInputComponent implements OnInit {

  userSettings: UserSettings={
    itemName: '',
    itemRoom: 'garage',
    whereInRoom: 'rack',
    itemUnit: 1
  };
  
  constructor(private itemService: ItemService) {
    
  }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    console.log('onSubmit status: ', form.valid);
  }
  onBlur(field: NgModel) {
    console.log('onBlur status: ', field.valid);
  }
}
