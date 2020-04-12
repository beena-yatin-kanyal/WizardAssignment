import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

// Keeping it in a root for differential purpose only.
// As this is kept in root, this service becomes accessible to all the components of the entire application among all modules globally.
@Injectable({
  providedIn: 'root'
})
export class NavigatorService {

  constructor(private router: Router) { }

  goToUrl(uri: string) {
    this.router.navigateByUrl(uri);
  }
}
