import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { BannerComponent } from './banner/banner.component';
import { SideNavComponent } from './side-nav/side-nav.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    BannerComponent,
    RouterOutlet,
    SideNavComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'The Trade Desk';
}
