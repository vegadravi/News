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
    const routesToHideHeader = ['/login', '/signup', '/admin','/register','/'];

    // Return false if the current route is in the list of routes to hide the header.
    console.log('R4x routesToHideHeader.includes(this.router.url) ',);
    return !routesToHideHeader.includes(this.router.url);
  }
}
