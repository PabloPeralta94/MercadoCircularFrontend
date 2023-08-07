import { Component, OnInit} from '@angular/core';
import { FriendDTO } from 'src/app/interfaces/friend-dto';
import { FriendService } from 'src/app/services/friend.service';


@Component({
  selector: 'app-amigos',
  templateUrl: './amigos.component.html',
  styleUrls: ['./amigos.component.css']
})
export class AmigosComponent implements OnInit {
  friends: FriendDTO[] = [];

  constructor(private friendService: FriendService) {}

  ngOnInit(): void {
    this.getMyFriends();
  }

  getMyFriends(): void {
    this.friendService.getMyFriends().subscribe(
      (friends) => {
        this.friends = friends;
      },
      (error) => {
        console.error('Error fetching friends list:', error);
      }
    );
  }
} 