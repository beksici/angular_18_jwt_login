import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginObj: any = {
    EmailId: '',
    Password: '',
  };

  http = inject(HttpClient); //appconfige ekleme yaptık
  router = inject(Router);

  onLogin() {
    debugger;
    this.http
      .post(
        'https://freeapi.miniprojectideas.com/api/User/Login',
        this.loginObj
      )
      .subscribe((res: any) => {
        if (res.result) {
          alert('Login success');
          localStorage.setItem('angular18Token', res.data.token);
          this.router.navigateByUrl('dashboard');
        } else {
          alert(res.message);
        }
      });
  }
}
