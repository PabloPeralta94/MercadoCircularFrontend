import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { post } from 'src/app/interfaces/post';
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
    private postService: PostService // Replace 'PostService' with your actual post service
  ) {}

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
}


