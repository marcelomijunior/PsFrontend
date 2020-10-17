import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  faFacebook = faFacebook;
  faGoogle = faGoogle;

  constructor(private router: Router) {}

  onLogin() {
    this.router.navigate(['/home']);
  }

  ngOnInit() {}
}
