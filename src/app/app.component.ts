import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { SecurityService } from './shared/services/security.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  title = 'proyectoLogin';
  Authenticated = false;
  private subscriptionAuth: Subscription;

  constructor(
    private securityService: SecurityService) {

    this.Authenticated = this.securityService.IsAuthorized;

    // Se suscribe a los eventos de autenticacion del usuario
    this.subscriptionAuth = this.securityService.authenticationChallenge$.subscribe((isAuthorized) => {
      this.Authenticated = isAuthorized;
    });
  }

  ngOnDestroy() {
    this.subscriptionAuth.unsubscribe();
  }
}
