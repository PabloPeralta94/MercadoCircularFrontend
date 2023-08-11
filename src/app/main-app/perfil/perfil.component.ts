import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { post } from 'src/app/interfaces/post';
import { FriendService } from 'src/app/services/friend.service';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent {
  nombreUsuario: string;
  userPosts: post[];
  private postCreatedSubscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    private friendService: FriendService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.nombreUsuario = params.get('nombreUsuario')!;
      this.fetchUserPosts();
    });

    this.postCreatedSubscription = this.postService.postCreated$.subscribe(() => {
      this.fetchUserPosts();
    });

  }

  fetchUserPosts() {
    this.postService.getUserPosts(this.nombreUsuario).subscribe(
      (posts) => {
        this.userPosts = posts.sort((a, b) => b.postId! - a.postId!);;
      },
      (error) => {
        console.error('Error fetching user posts:', error);
      }
    );
  }

  sendFriendRequest() {
    this.friendService.sendFriendRequest(this.nombreUsuario).subscribe(
      (response) => {
        console.log('Friend request sent successfully:', response);
      },
      (error) => {
        console.error('Error sending friend request:', error);
      }
    );
  }
}


