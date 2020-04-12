import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

// Keeping it in a root for differential purpose only.
@Injectable({
  providedIn: 'root'
})
export class NavigatorService {

  constructor(private router: Router) { }

  goToUrl(uri: string) {
    this.router.navigateByUrl(uri);
  }
}
