import { Component, inject, OnInit, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Post } from '../../interface/post';
import { PostService } from '../../service/postService/post-service';
import { UserService } from '../../service/userService/user-service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-feed',
  imports: [FormsModule],
  templateUrl: './feed.html',
  styleUrl: './feed.scss',
})
export class Feed implements OnInit, OnDestroy {

  postService = inject(PostService);
  userService = inject(UserService);

  newPost: Post = {
    id: null,
    user: null,
    text: null,
    imageData: null,
    imageUrl: ''
  };

  postFeed: Post[] = [];

  selectedFile!: File;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.findAll();
  }

  
  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  
  savePost() {
    this.postService.createPost(this.newPost, this.selectedFile)
      .subscribe({
        next: () => {
          this.findAll();
        }
      });
  }

  
  findAll() {
    this.postService.findAll().subscribe({
      next: (data: Post[]) => {

        this.postFeed = data.map(post => {

          if (post.imageData) {
            const blob = new Blob(
              [new Uint8Array(post.imageData)],
                { type: 'image/png' }
              );

            const url = URL.createObjectURL(blob);
            window.open(url);

                     post.imageUrl = 'data:image/png;base64,' + post.imageData;
          }

           return post;
          });
      }
    });
  }

  
  ngOnDestroy() {
    this.postFeed.forEach(post => {
      if (post.imageUrl) {
        URL.revokeObjectURL(post.imageUrl);
      }
    });
  }
}