import { Injectable } from '@angular/core';
import { GitUser} from '../git-user-template';
import { GitRepo } from '../git-repo-template';
import { HttpClient } from '@angular/common/http';
import { FormControl } from '@angular/forms';
import {environment} from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class UserParserService {


  apiKey: any ="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"
  userNameEntry: any = 'gear5km'

 // userUrl='https://api.github.com/users/'+ this.userNameEntry //+'?access_token=' + this.apiKey;

  //Authorization: token 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' https://api.github.com/gear5km

  userUrl:any;
  user: GitUser;
  repos:any;

  constructor(private http:HttpClient) {
    this.user=  new GitUser('','','','');

   }

   getUser(userQuery: string){
    interface getData{
      login:any;
      id:any;
      avatar_url:any;
    }
      //this.userUrl=(environment.gitUrl)+ userQuery //+'?access_token=' + this.apiKey;
      //return this.http.get<getData>(this.userUrl)

      let promise = new Promise((resolve,reject)=>{
        this.http.get<getData>(environment.gitUrl+ userQuery).toPromise().then(response=>{
          this.user.userLogin = response?.login;
          this.user.avatar_url = response?.avatar_url

          resolve(this.user)
          alert(this.user.userLogin)
        },
        error=>{
          this.user.userLogin = "NO user Found!"
          this.user.avatar_url = "Null"

          reject(error)
        })
      })
      return promise

    }

    getRepos(userQuery: string){
    this.userUrl=(environment.gitUrl)+ userQuery + environment.repos //+'?access_token=' + this.apiKey;
    return this.http.get(this.userUrl);
      }

}
