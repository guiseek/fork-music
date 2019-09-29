import { Component, OnInit } from '@angular/core';
import { AuthService } from '@suite/auth/shared/auth';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'account-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class AccountDropdownComponent implements OnInit {
  isOpen: boolean;

  auth
  auth$: Observable<any>
  constructor(
    private authService: AuthService,
    public route: ActivatedRoute
  ) { }

  ngOnInit() {
    console.log(
      this.authService.auth
    )
    this.auth = this.authService.auth
    this.auth$ = this.authService.authState
      .pipe(
        map((auth) => this.auth = auth)
      )
  }
  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  onClickOutside() {
    this.isOpen = false;
  }

  public logout() {
    this.auth.signOut()
    // this.store.dispatch(new Logout());
  }
}
