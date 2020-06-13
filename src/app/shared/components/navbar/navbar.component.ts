import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SecurityService } from '../../services/security.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private router: Router,
    private securityService: SecurityService) { }

  ngOnInit(): void {
  }

  logout() {
    this.securityService.Logoff();
    this.router.navigate(['/login']);
  }

}
