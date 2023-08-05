import { Component, OnInit, OnDestroy } from '@angular/core';
import { post } from '../../../interfaces/post';
import { TokenService } from 'src/app/services/token.service';
import { PostService } from 'src/app/services/post.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit, OnDestroy {
  public posts: post[] = [];
  isAdmin = false;
  private postCreatedSubscription: Subscription;

  constructor(
    private postService: PostService,
    private tokenService: TokenService
  ) { }

  ngOnInit() {
    this.getPosts();
    this.isAdmin = this.tokenService.isAdmin();

    // Subscribe to the event to refresh the post list when a new post is created
    this.postCreatedSubscription = this.postService.postCreated$.subscribe(() => {
      this.getPosts();
    });
  }

  ngOnDestroy() {
    // Unsubscribe to avoid memory leaks
    this.postCreatedSubscription.unsubscribe();
  }

  public getPosts(): void {
    this.postService.getPosts().subscribe(
      (response: post[]) => {
        // Sort the posts by ID in descending order (from max to min)
        this.posts = response.sort((a, b) => b.postId! - a.postId!);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
