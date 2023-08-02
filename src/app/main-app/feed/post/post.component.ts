import { Component, OnInit } from '@angular/core';
import { post } from '../../../interfaces/post';
import { TokenService } from 'src/app/services/token.service';
import { PostService } from 'src/app/services/post.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  public posts: post[] = []
  isAdmin = false;

  constructor(
    private postService: PostService,
    private tokenService: TokenService
  ) { }

  ngOnInit() {
    this.getPosts();
    this.isAdmin = this.tokenService.isAdmin();
  }

  public getPosts(): void {

    this.postService.getPosts().subscribe(
      (response: post[]) => {
        this.posts = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );

  
}
}