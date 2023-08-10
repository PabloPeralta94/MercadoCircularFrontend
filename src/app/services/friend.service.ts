import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FriendRequestDTO } from '../interfaces/friend-request';
import { FriendDTO } from '../interfaces/friend-dto';

@Injectable({
  providedIn: 'root'
})
export class FriendService {
  private apiUrl = 'http://localhost:8080/api/v1/friends';

  constructor(private http: HttpClient) {}

  // Send a friend request to a user with the given friendId
  sendFriendRequest(nombreUsuario: string): Observable<any> {
    return this.http.post<string>(`${this.apiUrl}/send-request/${nombreUsuario}`, null);
  }

  // Accept a friend request from a user with the given senderId
  acceptFriendRequest(senderId: number): Observable<any> {
    return this.http.post<string>(`${this.apiUrl}/accept-request/${senderId}`, null);
  }

  // Get pending friend requests for the authenticated user
  getPendingFriendRequests(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/pending-requests`);
  }

  // Get received friend requests for the authenticated user
  getReceivedFriendRequests(): Observable<FriendRequestDTO[]> {
    return this.http.get<FriendRequestDTO[]>(`${this.apiUrl}/received-requests`);
  }

  getMyFriends(): Observable<FriendDTO[]> {
    return this.http.get<FriendDTO[]>(`${this.apiUrl}/amigos`);
  }

  
}



