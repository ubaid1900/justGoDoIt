import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  images: Image[] = [];
  constructor() {
    this.images = [
      {
        url: "https://abc.com",
        name: "n",

      },
      
      {
        url: "https://def.com",
        name: "n",

      }
    ]
  }
}

export interface Image {
  url: string,
  name?: string,
  description?: string | null
}
