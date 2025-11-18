import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class Guard3 implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    console.log('Guard 3 checking...');
    return true;
  }
}
