import { Component, signal } from '@angular/core';

import { Home } from './pages/home/home';
import { Footer } from './footer/footer';
import { Navbar } from './navbar/navbar';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [Footer,Navbar,RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('project1');
}
