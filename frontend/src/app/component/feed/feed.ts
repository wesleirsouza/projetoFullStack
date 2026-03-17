import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Post } from '../../interface/post';
import { PostService } from '../../service/postService/post-service';
import { UserService } from '../../service/userService/user-service';

@Component({
  selector: 'app-feed',
  imports: [FormsModule],
  templateUrl: './feed.html',
  styleUrl: './feed.scss',
})
export class Feed {

  postService = inject(PostService);
  userService = inject(UserService);

  newPost : Post = {
    id: null,
    user: null,
    text: null,
    imagemData: null
  }

  postFeed : Post[] = [];

    ngOnInit(): void {
    this.findAll();
  }

  selectedFile!: File;

onFileSelected(event: any){
  this.selectedFile = event.target.files[0];
}

savePost(){
  this.postService.createPost(this.newPost, this.selectedFile)
  .subscribe({
    next: () => {
      console.log("Post criado");
      this.findAll();
    }
  });
}
 

  findAll(){
    this.postService.findAll().subscribe({
      next : (data : Post[]) => {
       this.postFeed = data;
       console.log(data)
      }
    })
  }

}
