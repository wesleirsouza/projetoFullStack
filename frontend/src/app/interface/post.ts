import { User } from "./user/user";

export interface Post {
    id : number | null;
    user : User | null;
    text : string | null;
    imagemData : string | null;
}
