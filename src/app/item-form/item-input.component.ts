import { Component, OnInit } from '@angular/core';
import {ItemService} from './item.service';
import {UserSettings} from '../data/user-settings';
import { NgForm, NgModel } from '@angular/forms';
import { DataService } from '../data/data.service';

@Component({
  selector: 'app-item-input',
  templateUrl: './item-input.component.html',
  styleUrls: ['./item-input.component.css']
})
export class ItemInputComponent implements OnInit {

  originalUserSettings: UserSettings={
    itemName: '',
    itemRoom: 'basement',
    whereInRoom: 'stair',
    itemUnit: 1
  };

  userSettings: UserSettings = {...this.originalUserSettings};
  postError=false;
  postErrorMessage='';

  constructor(private dataService: DataService) {
    
  }

  ngOnInit(): void {
  }

  onHttpError(errorResponse: any) {
    console.log('error: ', errorResponse );
    this.postError=true;
    this.postErrorMessage=errorResponse.error.errorMessage;
  }
  onSubmit(form: NgForm) {
    console.log("in onSubmit: ", form.valid);
    if(form.valid){
      this.dataService.postUserSettingsForm(this.userSettings).subscribe(
        (      result: any) => console.log('success: ', result),
        (      error: any) => this.onHttpError(error)
      );
    }
    else {
      this.postError=true;
      this.postErrorMessage="Please fix the above errors";
    }


  }
  
  onBlur(field: NgModel) {
    console.log('onBlur status: ', field.valid);
  }
}
