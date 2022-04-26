import { Injectable } from '@angular/core';
import { GitUser} from '../git-user-template';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserParserService {

  apiKey: any ="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"
  userNameEntry: any = 'gear5km'

  userUrl='https://api.github.com/users/'+ this.userNameEntry //+'?access_token=' + this.apiKey;

  //Authorization: token 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' https://api.github.com/gear5km

  //user= new GitUser();


  constructor(private http:HttpClient) {
    //this.user= new GitUser
   }

   getUser(){
    interface getData{
      login:string;
      id:string;
    }
      return this.http.get<getData>(this.userUrl)
      //this.http.get<getData>(this.userUrl)
      //return this.user.userLogin
      //this.user.userLogin='gear5km';
      //this.user.userID= '12345'
      //return this.user;

    }

}
