import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { post } from '../interfaces/post';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  postURL = environment.postURL;

  constructor(private http: HttpClient) { }

  public getPosts(): Observable<post[]> {
    return this.http.get<post[]>(`${this.postURL}/allpost`);
  }
}
