import { Component } from '@angular/core';
import { post } from 'src/app/interfaces/post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-crear-post',
  templateUrl: './crear-post.component.html',
  styleUrls: ['./crear-post.component.css']
})
export class CrearPostComponent {
  postTitle: string;
  postBody: string;

  constructor(private postService: PostService) { }

  onSubmit() {

    const post: post = {
      title: this.postTitle,
      text: this.postBody
    };


    this.postService.createPost(post).subscribe(
      (createdPost) => {
        console.log('Created Post:', createdPost);


        this.postTitle = '';
        this.postBody = '';
      },
      (error) => {
        console.error('Error creating post:', error);
      }
    );
  }
}