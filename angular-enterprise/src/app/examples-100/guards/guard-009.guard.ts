import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class Guard9 implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    console.log('Guard 9 checking...');
    return true;
  }
}
