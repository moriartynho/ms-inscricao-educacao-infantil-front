import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { HeaderComponent } from './componentes/header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [RouterOutlet, HeaderComponent, HttpClientModule],
  providers:[DatePipe]
})
export class AppComponent {
  title = 'inscricao-educacao-infantil-front';
}
