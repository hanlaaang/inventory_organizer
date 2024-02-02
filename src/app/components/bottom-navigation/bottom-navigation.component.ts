import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-bottom-navigation',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './bottom-navigation.component.html',
  styleUrl: './bottom-navigation.component.css'
})
export class BottomNavigationComponent {

}
