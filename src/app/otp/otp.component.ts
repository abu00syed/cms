import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OtpComponent implements OnInit {

 
  constructor() { }

  otpModel: any = {
    code1: "",
    code2: "",
    code3: "",
    code4: ""
  }

  ngOnInit(): void {
  }






  onDigitInput(event: any){
    let element;
    if (event.code !== 'Backspace')
         element = event.srcElement.nextElementSibling;
 
     if (event.code === 'Backspace')
         element = event.srcElement.previousElementSibling;
 
     if(element == null)
         return;
     else
         element.focus();
 }


 validateOtp(){}

 

}
