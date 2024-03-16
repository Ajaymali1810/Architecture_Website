// contact.component.ts
import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  constructor(@Inject(DOCUMENT) private document: Document) {}
  nameRegex = /^[a-zA-Z\s]+$/;
  emailRegex = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/ 
  integerRegex = /^\d+$/
  showMessage = false; // Flag to control displaying the message

  ngOnInit() {
    this.scrollToTop(); // Use the scrolling logic directly
  }

  scrollToTop() {
    this.document.body.scrollTop = 0;
    this.document.documentElement.scrollTop = 0;
  }

  registerForm = new FormGroup({
    name: new FormControl("", [Validators.required, Validators.maxLength(32), Validators.minLength(2), Validators.pattern(this.nameRegex)]),
    email: new FormControl("", [Validators.required, Validators.maxLength(40), Validators.minLength(7), Validators.pattern(this.emailRegex)]),
    Phone: new FormControl("", [Validators.required, Validators.maxLength(10), Validators.minLength(10), Validators.pattern(this.integerRegex)])
  })
  
  getControl(name: any): AbstractControl | null {
    return this.registerForm.get(name)
  }

  onSubmit() {
    if (this.registerForm.valid) {
      this.registerFn();
    } else {
      this.showMessage = true; // Set the flag to show the message
      this.registerForm.markAllAsTouched();
    }
  }

  registerFn() {
    const userName = this.registerForm.get('name')?.value;
    this.showMessage = false; // Reset the flag
    alert(`Thank you ${userName}! HPSV Studio will contact you soon.`);
    // Perform further actions for a valid form submission
  }
}
