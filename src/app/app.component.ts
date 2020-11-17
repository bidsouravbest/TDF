import { Component } from '@angular/core';
import { User } from './User';

// import { EnrollmentService } from './enrollment.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  topics = [ 'Angular' , 'JavaScript', 'React' ];

  // datasU : User[];

  arraydata : User[] = [];

  userModel : User = new User('', '', null , 'default', '', false );

  topicHasError = true;

  // constructor(private _enrollmentService : EnrollmentService) {}
  constructor() {}

  // ngOnInit(): void {
  // }
  // data(userForm : NgForm){
  // this.arraydata.push(userForm.value);
  // }
  
  validateTopic(val)
  {
    if(val === 'default')
      this.topicHasError = true;
    else
      this.topicHasError = false;
  }

  onSubmit(userForm : NgForm)
  {
    // this._enrollmentService.enroll(this.userModel)
    // .subscribe(
    //   data => console.log('Successful!' , data),
    //   error => console.log('Error!!' , error)
    // );

    // this.datasU[ this.i++]  = this.userModel;

    // this.arraydata.push(this.userModel);
    console.log(this.arraydata);
    this.arraydata.push(userForm.value);

    userForm.reset()
  }
}