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
    text: null,
    imagem: null,
    user: null
  }

  savePost(){
    this.postService.createPost(this.newPost).subscribe({
      next : (data : Post) =>{
        console.log("Poste Salvo");
      }
    })
  }

}
