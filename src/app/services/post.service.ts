import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { post } from '../interfaces/post';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  postURL = environment.postURL;
  private postCreatedSource = new Subject<void>();

  constructor(private http: HttpClient) { }

  public getPosts(): Observable<post[]> {
    return this.http.get<post[]>(`${this.postURL}`);
  }

  public createPost(post: post): Observable<post> {
    return this.http.post<post>(`${this.postURL}/byUser`, post);
  }

  public getUserPosts(nombreUsuario: string): Observable<post[]> {
    return this.http.get<post[]>(`${this.postURL}/byUser?nombreUsuario=${nombreUsuario}`);
  }  
  emitPostCreated() {
    this.postCreatedSource.next();
  }
  
  postCreated$ = this.postCreatedSource.asObservable();
}
