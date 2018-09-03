import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

// import { Component, EventEmitter, OnInit, ViewChild, ElementRef } from '@angular/core';
// import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { emailValidator } from './validators/form.validator';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  myForm: FormGroup;

  constructor(private router:Router) { }
  onSubmit(){
   alert(`this.myForm.value`);
    this.router.navigate([`/atm`]);
    
  }
  

}
