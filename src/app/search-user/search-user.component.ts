import { Component, OnInit } from '@angular/core';
import { UserParserService } from '../userParserService/user-parser.service';
import {GitUser} from '../git-user-template';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormControl, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.css'],
})
export class SearchUserComponent implements OnInit {

  userQuery = new FormControl('');// Takes in a profile name from input

  user = new GitUser('','','',''); //
  testUser: any;
  checkUserInit = false; // Checks if a search query has been attempted in order to display the user area
  constructor(private userParserService:UserParserService, private router:Router) {}

  checkUser(){

    this.userParserService.getUser(this.userQuery.value)
    this.user.userLogin= this.userParserService.user.userLogin
    this.user.avatar_url= this.userParserService.user.avatar_url

    if(this.user.userLogin != "NO user Found!"){
      this.checkUserInit=true
      this.router.navigate(['/search-repo',this.user])

    }
    else{
      this.checkUserInit=false
    }

  }


  ngOnInit(): void {

  }

}
