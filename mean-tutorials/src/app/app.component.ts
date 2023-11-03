import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderComponent } from './components/header/header/header.component';

@Component({
  selector: 'app-root',
  
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private router: Router) {}
  shouldShowHeader(): boolean {
    const routesToHideHeader = ['/login', '/signup', '/admin', '/admin/dashboard', '/admin/aworld', '/admin/business'];

    // Return false if the current route is in the list of routes to hide the header.
    return !routesToHideHeader.includes(this.router.url);
  }
}
