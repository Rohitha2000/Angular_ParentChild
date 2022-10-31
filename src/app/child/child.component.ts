
import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
 @Input() user1: {name :string , email: string, place: string};

 @Output() formValues= new EventEmitter<NgForm>() ;
//  formValues(data:any){
//   console.log(data);
//  }
  constructor() { }

  ngOnInit(): void {
  }

}
