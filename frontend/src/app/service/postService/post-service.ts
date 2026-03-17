import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Post } from '../../interface/post';

@Injectable({
  providedIn: 'root',
})
export class PostService {

  private http = inject(HttpClient);
  private apiUrl = "http://localhost:8080/api/post";

  createPost(post: Post, file: File){

  const formData = new FormData();

  formData.append("text", post.text!);
  formData.append("image", file);
  formData.append("userId", String(2));

  return this.http.post(this.apiUrl + "/create", formData);
}

  public findAll(){
    return this.http.get<Post[]>(this.apiUrl + '/findAll');
  }
  
}
