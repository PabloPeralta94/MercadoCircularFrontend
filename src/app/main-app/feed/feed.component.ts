import { Component } from '@angular/core';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent {

  postTitle: string;
  postBody: string;

  onSubmit() {
    // Here, you can handle the form submission and send the post data to your server or perform any desired actions.
    console.log('Post Title:', this.postTitle);
    console.log('Post Body:', this.postBody);

    // Reset the form fields after submission (optional)
    this.postTitle = '';
    this.postBody = '';
  }


}
