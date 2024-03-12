import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OtpComponent implements OnInit {

 

  otpModel: any = {
    code1: '',
    code2: '',
    code3: '',
    code4: ''
  };

  constructor(private router: Router) { }
  ngOnInit(): void {
    
  }

  onDigitInput(event: any, nextInput: any) {
    const input = event.target;
    const length = input.value.length;
    const maxLength = input.getAttribute('maxlength');
    if (length >= parseInt(maxLength || '0', 10)) {
      nextInput.focus();
    }
  }

  validateOtp() {
    const otp = `${this.otpModel.code1}${this.otpModel.code2}${this.otpModel.code3}${this.otpModel.code4}`;
    // Here you would typically send the OTP to your backend server for verification
    // For demonstration purposes, let's just log the OTP
    console.log('Entered OTP:', otp);

    // You can add your OTP verification logic here
    // For example, you can make an HTTP request to your backend to verify the OTP

    // Assuming the OTP is successfully validated, navigate to the dashboard
    this.router.navigate(['cms/dashboard']);
  }

}
