import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  email;
  password;

  constructor(private dataSvc: DataService, private router: Router) {}

  ngOnInit() {}

  login(email, password) {
    this.dataSvc
      .login(email, password)
      .subscribe((response: { status; email }) => {

        if (response.email) {
          this.router.navigate(['/dashboard']);
        } else {
          Swal.fire({
            title: response.status,
            // text: respon,
            icon: 'error',
            confirmButtonText: 'OK',
            timer: 1500,
          });
        }
      });
  }
}
