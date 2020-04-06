import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  email;
  password;

  constructor(private dataSvc: DataService) {}

  ngOnInit() {}

  login(email, password) {
    this.dataSvc.login(email, password).subscribe((response) => {
      console.log(`Returned from Server`, response);
    });
  }
}
