import { Component, OnInit } from '@angular/core';
import { FriendRequestDTO } from 'src/app/interfaces/friend-request';
import { FriendService } from 'src/app/services/friend.service';

@Component({
  selector: 'app-solicitudes',
  templateUrl: './solicitudes.component.html',
  styleUrls: ['./solicitudes.component.css']
})
export class SolicitudesComponent implements OnInit {
  friendRequests: FriendRequestDTO[] = [];

  constructor(private friendService: FriendService) {}

  ngOnInit(): void {
    this.getReceivedFriendRequests();
  }

  getReceivedFriendRequests(): void {
    this.friendService.getReceivedFriendRequests().subscribe(
      (requests) => {
        this.friendRequests = requests;
      },
      (error) => {
        console.error('Error fetching received friend requests:', error);
      }
    );
  }
  aceptarRequest(requestId: number): void {
    this.friendService.acceptFriendRequest(requestId).subscribe(
      (response: string) => {
        console.log('Request accepted:', response);
        this.friendRequests = this.friendRequests.filter(request => request.id !== requestId);
      },
      (error) => {
        console.error('Error accepting friend request:', error);
      }
    );
  }
}
