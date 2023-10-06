import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { FormService } from 'src/app/Services/form.service';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.scss']
})
export class SingupComponent implements OnInit {


  formData = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  }
  constructor(private formService: FormService, private router: Router) { }
  ngOnInit(): void {
  }
  onSubmit() {
    if (this.formData.password === this.formData.confirmPassword) {
      this.formService.saveFormData(this.formData).subscribe((response: any) => {
        console.log(response);
      });
      this.router.navigate(['/login']);
    }else{   
      alert('Please enter password is same')
    }
  }


}
