import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuth = false
  constructor() { }

  login() {
    this.isAuth = true
  }

  Logout() {
    this.isAuth = false
  }

  isAuthenticate(): Promise<boolean> {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(this.isAuth)
      }, 2000)
    })
  }


}
