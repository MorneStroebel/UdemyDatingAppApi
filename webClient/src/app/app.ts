import {Component, inject, OnInit, signal} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  private http = inject(HttpClient)
  protected readonly title = signal('UdemyDating App');

  ngOnInit(): void {
    this.http.get("https://localhost:7290/api/AppUsers").subscribe({
      next: (data) => console.log(data),
      error: (err) => console.error(err),
      complete: () => console.log('complete')
    });
  }
}
