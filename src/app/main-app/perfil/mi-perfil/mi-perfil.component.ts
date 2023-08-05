import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { post } from 'src/app/interfaces/post';
import { PostService } from 'src/app/services/post.service';
import { TokenService } from 'src/app/services/token.service'; // Import the TokenService

@Component({
  selector: 'app-mi-perfil',
  templateUrl: './mi-perfil.component.html',
  styleUrls: ['./mi-perfil.component.css']
})
export class MiPerfilComponent {
  nombreUsuario: string;
  userPosts: post[];
  private postCreatedSubscription: Subscription;

  constructor(
    private postService: PostService,
    private tokenService: TokenService 
  ) {
    this.nombreUsuario = this.tokenService.getUserName();
  }

  ngOnInit() {
    this.fetchUserPosts();

    this.postCreatedSubscription = this.postService.postCreated$.subscribe(() => {
      this.fetchUserPosts();
    });
  }

  fetchUserPosts() {
    this.postService.getUserPosts(this.nombreUsuario).subscribe(
      (posts) => {
        this.userPosts = posts.sort((a, b) => b.postId! - a.postId!);
      },
      (error) => {
        console.error('Error fetching user posts:', error);
      }
    );
  }
}
