import { Component } from '@angular/core';
import { Router, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterOutlet,HeaderComponent,SidebarComponent,RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'todo-app';
}
