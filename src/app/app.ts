import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Taskbar } from './taskbar/taskbar';

@Component({
  imports: [RouterOutlet,RouterLink,Taskbar],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('demo1');
}
