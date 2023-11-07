import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormService } from 'src/app/Services/form.service';
import { StandaloneModule } from 'src/app/module/standalone/standalone.module';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    registerData: any
    formDataWrong:boolean = false;
    formData = {
        email: '',
        password: ''
    }
    constructor(private formService: FormService, private router: Router) { }


    ngOnInit(): void {
        this.formService.getRegistrationData().subscribe((response: any) => {
            this.registerData = response
        });
    }
    onSubmit() {
        this.registerData.map((data: any) => {
            if (data.email === this.formData.email && data.password === this.formData.password){
                this.router.navigate(['/']);
            } 
            if (data.email !== this.formData.email && data.password !== this.formData.password){    
                this.formDataWrong = true;
            }

        });
    }

}
