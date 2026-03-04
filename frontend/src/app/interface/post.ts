import { User } from "./user/user";

export interface Post {
    text : String | null;
    imagem : File | null;
    user : User | null;
}
