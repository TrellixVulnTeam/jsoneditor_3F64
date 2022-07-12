import { Component } from '@angular/core';
import { data } from './jsonfiles/data2';
import { schema } from './jsonfiles/schema2';
import { NbDialogService } from '@nebular/theme';

// @ts-ignore
import { Validator } from 'schema-validator';
import { FormComponent } from './form.component';
import { ReviewCardComponent } from './reviewCard';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  schemaTitle = schema.title;
  schemaDescription = schema.description;
  logData = () => {
    console.log(data);
  }
  getData(){
    console.log("data getting");
    return data;
  } 
  validate = () => {
    this.open(false);
    console.log(data);
  }
    constructor(private dialogService: NbDialogService) {
  }

  open(hasScroll: boolean) {
    this.dialogService.open(ReviewCardComponent, { hasScroll });
  }
  title = 'jsonTalkSoft';
}
