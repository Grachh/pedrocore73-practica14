import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RbacService {

  logged = false;

  constructor() { }

  isLogged() {
    return this.logged;
  }

}
