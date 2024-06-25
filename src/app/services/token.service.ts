import { Injectable } from '@angular/core';
import { environment } from '../../environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  baseUri: string = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  login(username: string, password: string) {
    const url = this.baseUri + 'tokens/generate';
    let data = {
      username: username,
      password: password,
    };
    return this.http.post(url, data);
  }
}
