import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Post } from '../../interface/post';

@Injectable({
  providedIn: 'root',
})
export class PostService {

  private http = inject(HttpClient);
  private apiUrl = "http://localhost:8080/api/post";

  public createPost(post : Post){
    return this.http.post<Post>(this.apiUrl + '/create', post);
  }
  
}
