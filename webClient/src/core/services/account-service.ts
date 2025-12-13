import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})

export class AccountService {
  private http = inject(HttpClient);
  baseUrl = 'https://localhost:7290/api/';

  login(creds: unknown) {
    return this.http.post(this.baseUrl + 'Accounts/login', creds);
  }
}
