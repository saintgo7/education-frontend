import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class Guard5 implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    console.log('Guard 5 checking...');
    return true;
  }
}
