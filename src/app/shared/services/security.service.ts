import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {
  TOKEN_KEY = 'token';
  public IsAuthorized: boolean;

  private authenticationSource = new Subject<boolean>();
  authenticationChallenge$ = this.authenticationSource.asObservable();

  constructor(
    private storageService: StorageService
  ) { }

  public SetAuthorizationData(token: any) {
    this.storageService.store(this.TOKEN_KEY, token);
    this.IsAuthorized = true;

    this.authenticationSource.next(true);
  }

  public GetToken(): any {
    return this.storageService.retrieve(this.TOKEN_KEY);
  }

  public Authorize() {
    this.ResetAuthorizationData();
    window.location.href = '/';
  }

  public Logoff() {
    this.ResetAuthorizationData();
    this.authenticationSource.next(false);
  }

  public ResetAuthorizationData() {
    this.storageService.store(this.TOKEN_KEY, '');
    this.IsAuthorized = false;
  }
}
