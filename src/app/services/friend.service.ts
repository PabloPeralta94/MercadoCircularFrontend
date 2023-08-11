import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FriendRequestDTO } from '../interfaces/friend-request';
import { FriendDTO } from '../interfaces/friend-dto';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FriendService {
  private apiUrl = environment.friendURL;

  constructor(private http: HttpClient) {}
  
  sendFriendRequest(nombreUsuario: string): Observable<any> {
    return this.http.post<string>(`${this.apiUrl}/send-request/${nombreUsuario}`, null);
  }
 
  acceptFriendRequest(senderId: number): Observable<any> {
    return this.http.post<string>(`${this.apiUrl}/accept-request/${senderId}`, null);
  }

  getPendingFriendRequests(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/pending-requests`);
  }
  
  getReceivedFriendRequests(): Observable<FriendRequestDTO[]> {
    return this.http.get<FriendRequestDTO[]>(`${this.apiUrl}/received-requests`);
  }

  getMyFriends(): Observable<FriendDTO[]> {
    return this.http.get<FriendDTO[]>(`${this.apiUrl}/amigos`);
  }
  
}



