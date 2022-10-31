import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'parentchild';
  user={
    name: 'rohitha',
    email: 'rg@gmail.com',
    place: 'hyderabad'
  };

  formdata={
    fname: '',
    password: ''

  }

  Formdata(data){
    console.log(data);
    this.formdata.fname= data.name;
    this.formdata.password= data.password;

  }

  

}
