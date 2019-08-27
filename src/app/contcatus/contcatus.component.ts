import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contcatus',
  templateUrl: './contcatus.component.html',
  styleUrls: ['./contcatus.component.css']
})
export class ContcatusComponent implements OnInit {

  contactusForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.contactusForm = this.fb.group({
      'email':[null , Validators.required],
      'firstName':[null , Validators.required],
      'lastName':[null , Validators.required],
      'message':[null , Validators.required]
    });
  }

  contactus(formData: NgForm){
    console.log(formData);
  }

}
